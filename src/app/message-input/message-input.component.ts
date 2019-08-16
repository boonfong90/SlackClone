import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {
  users : User;
  username: string;
  userIndex: number;
  errorMessages: string;

  messageForm = new FormControl(
    "",
  [
    Validators.required,
    Validators.maxLength(255)
  ])

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.selectedUser.subscribe(value =>{
      this.users = this.service.users.value[value]
      this.userIndex = value
      this.username = this.users.name
    })
  }

  sendMessage(){

    if(this.messageForm.valid){
      const message = this.messageForm.value
      this.service.createMessage(message, this.userIndex)
      this.messageForm.reset()
      this.errorMessages =""
    }else{
      for(let errorKey in this.messageForm.errors){
        if(errorKey === "maxlength"){
          this.errorMessages = "You can only enter up to 255 characters"
        }
      }
    }
  }

}
