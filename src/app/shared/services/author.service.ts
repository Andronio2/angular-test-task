import { Injectable } from '@angular/core';
import { IAuthor } from '../types/author.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  getAuthorList(): IAuthor[] {
    const json = localStorage.getItem('authors');
    try {
      if (json) {
        return JSON.parse(json);
      } else return [];
    } catch {
      return [];
    }
  }

  saveAuthorList(authorList: IAuthor[]) {
    localStorage.setItem('authors', JSON.stringify(authorList));
  }
}
