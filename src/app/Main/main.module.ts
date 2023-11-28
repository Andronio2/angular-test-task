import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BooksComponent } from './pages/books/books.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { AuthorInputComponent } from './components/author-input/author-input.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookInputComponent } from './components/book-input/book-input.component';
import { BookTableComponent } from './components/book-table/book-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorTableComponent } from './components/author-table/author-table.component';
import { AuthorItemComponent } from './components/author-item/author-item.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    BooksComponent,
    AuthorsComponent,
    AuthorInputComponent,
    AuthorTableComponent,
    AuthorItemComponent,
    BookInputComponent,
    BookTableComponent,
    BookItemComponent,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, NgbModule, NgbDropdownModule],
})
export class MainModule {}
