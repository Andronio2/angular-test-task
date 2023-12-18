import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss'],
})
export class HeaderComponent {
  @Output() readonly search = new EventEmitter<string>();

  protected searchField = new FormControl('');

  protected onSearch() {
    this.search.emit(this.searchField.value!);
  }
}
