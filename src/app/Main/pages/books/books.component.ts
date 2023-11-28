import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/services/book.service';
import { IBook } from 'src/app/shared/types/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  protected bookList: IBook[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookList = this.bookService.getBookList();
  }

  addBook(book: IBook) {
    const id = this.bookList.length > 0 ? this.bookList[this.bookList.length - 1].id + 1 : 1;
    this.bookList = [...this.bookList, { ...book, id }];
    this.bookService.saveBookList(this.bookList);
  }
}
