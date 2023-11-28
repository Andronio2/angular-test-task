import { Component, Input } from '@angular/core';
import { IBook } from 'src/app/shared/types/book.interface';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent {
  @Input() book!: IBook;
}
