import { Component, Input } from '@angular/core';
import { IAuthor } from 'src/app/shared/types/author.interface';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.scss'],
})
export class AuthorItemComponent {
  @Input() author!: IAuthor;
}
