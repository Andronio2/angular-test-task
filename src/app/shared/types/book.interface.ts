import { IAuthor } from './author.interface';

export interface IBook {
  id: number;
  name: string;
  author: IAuthor;
  publisher: string;
  year: string;
}
