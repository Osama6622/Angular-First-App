import { Component, computed, EventEmitter, input, output, Input, Output } from '@angular/core';

import { UserObj } from "./user.modal";
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // Using Input Decorator 
  // @Input({required: true}) avatar!: string
  // @Input({required: true}) name!: string
  // @Input({required: true}) id!: string

  @Input({required: true}) user!: UserObj
  @Input({required: true}) selected!: Boolean
  @Output() select = new EventEmitter<string>()

  // Readonly InputSignal
  // avatar = input.required<string>()
  // name = input.required<string>()

  // select = output<string>()

  // userImageUrl = computed(() => {
  //   return 'assets/users/' + this.avatar()
  // })

  get userImageUrl() {
    return 'assets/users/' + this.user.avatar 
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
