import { Component, Input } from '@angular/core';
import { IBook } from 'src/app/shared/types/book.interface';

type SortField = keyof Omit<IBook, 'id'>;

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss'],
})
export class BookTableComponent {
  @Input() bookList: IBook[] = [];

  curSortField: SortField = 'author';
  curSortOrderAsc = true;

  switchSortOrder(field: SortField) {
    if (this.curSortField === field) {
      this.curSortOrderAsc = !this.curSortOrderAsc;
    } else {
      this.curSortOrderAsc = true;
      this.curSortField = field;
    }
  }
}
