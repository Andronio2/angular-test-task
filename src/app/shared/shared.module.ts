import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { SortAuthorPipe } from './pipes/sort-author.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortBookPipe } from './pipes/sort-book.pipe';

@NgModule({
  declarations: [HeaderComponent, SortAuthorPipe, SortBookPipe, ModalComponent],
  imports: [CommonModule, AppRoutingModule, NgbModule],
  exports: [HeaderComponent, SortAuthorPipe, SortBookPipe, ModalComponent],
})
export class SharedModule {}
