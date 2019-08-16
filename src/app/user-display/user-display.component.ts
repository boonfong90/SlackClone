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
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  users : User[];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.users.subscribe(value =>{
      this.users = value
    })
  }

  getvalue(index){
    this.service.updateSelectedUser(index)
  }

}
