import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './Main/pages/authors/authors.component';
import { BooksComponent } from './Main/pages/books/books.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'authors',
  },
  {
    path: 'authors',
    component: AuthorsComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: '**',
    redirectTo: 'authors',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
