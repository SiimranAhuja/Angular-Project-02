import { Component, EventEmitter, Input, input, Output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required : true}) id!: string;
  // @Input({required : true}) avatar!: string;
  // @Input({required : true}) name!: string;

  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  
  @Output() select = new EventEmitter()
  // avatar = input<string>();
  // name = input<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }  

  onClick() {
    this.select.emit(this.user.id)
  }
}
