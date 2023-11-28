import { Pipe, type PipeTransform } from '@angular/core';
import { IAuthor } from '../types/author.interface';

@Pipe({
  name: 'appSortAuthor',
})
export class SortAuthorPipe implements PipeTransform {
  transform(arr: IAuthor[]): IAuthor[] {
    return [...arr].sort((a, b) => a.surname.localeCompare(b.surname));
  }
}
