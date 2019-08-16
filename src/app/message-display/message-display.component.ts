import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

interface User {
  name: string
  email: string
  chat: Message[]
}

interface Message {
  text: string
  sender: string
}

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.css']
})
export class MessageDisplayComponent implements OnInit {
  users : User;
  messages : Message [];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.selectedUser.subscribe(value =>{
      this.users = this.service.users.value[value]
      this.messages = this.users.chat
    })
  }

}
