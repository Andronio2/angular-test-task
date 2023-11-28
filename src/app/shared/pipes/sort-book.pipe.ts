import { Pipe, type PipeTransform } from '@angular/core';
import { IBook } from '../types/book.interface';

@Pipe({
  name: 'appSortBook',
})
export class SortBookPipe implements PipeTransform {
  transform(arr: IBook[], field: keyof Omit<IBook, 'id'> = 'name', order = true): IBook[] {
    const orderConstant = order ? 1 : -1;
    switch (field) {
      case 'year': {
        return [...arr].sort((a, b) => (+a.year - +b.year) * orderConstant);
      }
      case 'author': {
        return [...arr].sort((a, b) => +a.author.surname.localeCompare(b.author.surname) * orderConstant);
      }
      default:
        return [...arr].sort((a, b) => a[field].localeCompare(b[field]) * orderConstant);
    }
  }
}
