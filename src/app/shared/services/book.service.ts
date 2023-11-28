import { Injectable } from '@angular/core';
import { IBook } from '../types/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  getBookList(): IBook[] {
    const json = localStorage.getItem('books');
    try {
      if (json) {
        return JSON.parse(json);
      } else return [];
    } catch {
      return [];
    }
  }

  saveBookList(bookList: IBook[]) {
    localStorage.setItem('books', JSON.stringify(bookList));
  }
}
