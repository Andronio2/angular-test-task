import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserDto } from 'src/app/services/users.api';

@Component({
  selector: 'app-main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.scss'],
})
export class MainComponent {
  @Input() userList: UserDto[] = [];
  @Output() readonly deleteUser = new EventEmitter<string>();

  protected isCard = true;

  protected onDelete(id: string) {
    this.deleteUser.emit(id);
  }

  protected switchView() {
    this.isCard = !this.isCard;
  }
}
