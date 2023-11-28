import { Component, Input } from '@angular/core';
import { IAuthor } from 'src/app/shared/types/author.interface';

@Component({
  selector: 'app-author-table',
  templateUrl: './author-table.component.html',
  styleUrls: ['./author-table.component.scss'],
})
export class AuthorTableComponent {
  @Input() authorList: IAuthor[] = [];
}
