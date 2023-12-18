import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserDto } from 'src/app/services/users.api';

@Component({
  selector: 'app-card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.scss'],
})
export class CardComponent {
  @Input() user!: UserDto;
  @Input() cardStyle = true;
  @Output() readonly deleteUser = new EventEmitter<string>();

  onClick() {
    this.deleteUser.emit(this.user.id);
  }
}
