import { Component, OnInit } from '@angular/core';
import { PageLimit, UserDto, UsersApi } from './services/users.api';
import { IPageSelect } from './types/page-select';
import { delay, of, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  protected userList: UserDto[] = [];
  protected maxItems = 0;
  private pageLimit: PageLimit = 5;
  private currPage = 1;
  private search = '';
  protected isLoading = false;

  constructor(private userService: UsersApi) {}

  ngOnInit(): void {
    this.requestUserList();
  }

  private requestUserList() {
    of(1)
      .pipe(
        tap(() => {
          this.isLoading = true;
        }),
        switchMap(() =>
          this.userService.getList({ itemsPerPage: this.pageLimit, pageNumber: this.currPage, search: this.search }),
        ),
        take(1),
      )
      .subscribe({
        next: list => {
          this.isLoading = false;
          this.userList = list.items;
          this.maxItems = list.total_count;
        },
        error: () => {
          this.isLoading = false;
          console.error('Ошибка получения пользователей');
        },
      });
  }

  protected onSearch(search: string) {
    this.search = search;
    this.requestUserList();
  }

  protected onDelete(id: string) {
    of(1)
      .pipe(
        tap(() => {
          this.isLoading = true;
        }),
        switchMap(() => this.userService.remove(id)),
        delay(500),
        switchMap(() => of(this.requestUserList())),
        take(1),
      )
      .subscribe({
        next: () => {},
        error: () => {
          this.isLoading = false;
          console.error('Ошибка удаления пользователя');
        },
      });
  }

  protected onPage({ currentPage, pageLimit }: IPageSelect) {
    this.currPage = currentPage;
    this.pageLimit = pageLimit;
    this.requestUserList();
  }
}
