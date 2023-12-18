import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { PageLimit } from 'src/app/services/users.api';
import { IPageSelect } from 'src/app/types/page-select';

@Component({
  selector: 'app-paginator',
  templateUrl: './Paginator.component.html',
  styleUrls: ['./Paginator.component.scss'],
})
export class PaginatorComponent implements OnChanges {
  @Input() maxItems = 0;
  @Output() readonly pageChange = new EventEmitter<IPageSelect>();

  protected currentPage = 1;
  protected currentLimit: PageLimit = 5;
  protected pageLimitList = Object.values(PageLimit).filter(item => typeof item === 'number');
  protected pageList: number[] = [];

  ngOnChanges(): void {
    this.calcPages();
  }

  private calcPages() {
    const pageCount = Math.ceil(this.maxItems / this.currentLimit);
    this.pageList = new Array(pageCount).fill(0).map((_, i) => i + 1);
  }

  protected selectChange(e: Event) {
    const elem = e.target as HTMLSelectElement;
    this.currentLimit = +elem.value;
    this.currentPage = 1;
    this.calcPages();
    this.pageChange.emit({
      currentPage: this.currentPage,
      pageLimit: this.currentLimit,
    });
  }

  protected selectPage(pageNum: number) {
    this.currentPage = pageNum;
    this.pageChange.emit({
      currentPage: this.currentPage,
      pageLimit: this.currentLimit,
    });
  }
}
