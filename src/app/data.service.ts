import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

interface User {
  name: string
  email: string
  chat: Message[]
}
​
interface Message {
  text: string
  sender: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users = new BehaviorSubject<User[]>([
    {
        name: "John",
        email: "john@example.com",
        chat: [{
          text: "Hi there!",
          sender: "Me"
        },
        {
          text: "HiHi",
          sender: "John"
        },
        {
          text: "All the Best !",
          sender: "Me"
        }
      ]
    },
    {
      name: "Jane",
      email: "Jane@example.com",
      chat: [
        {
          text: "Hi there!",
          sender: "Jane"
        },
        {
          text: "HiHi",
          sender: "Me"
        },
        {
          text: "Nice to meet you !",
          sender: "Jane"
        }
      ]
  }
])
​
selectedUser = new BehaviorSubject<number>(0)

  constructor() { }

  createMessage(message: string, chatUserindex: number) {
    // message: the text entered into the form
    // charUsername: the name of the user who you are chatting with
    // create a message object
    // set the sender (hardcode a username for now)
    
    const fullMessage: Message = {
      text: message,
      sender: "Me"
    }

    fullMessage.text = message
    this.users.value[chatUserindex].chat.push(fullMessage)

    // find the user
    // const users = this.users.getValue()
    // get the chats for that user
    // add the newly created message to the array of chat messages under that user
    // .next the updated user
    // this.users.next(updatedUsers)
  }
  
  updateSelectedUser(idx: number) {
    this.selectedUser.next(idx)
  }
  
}
