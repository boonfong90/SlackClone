import { Message } from './Message';

export interface User {
  name: string
  email: string
  chat: Message[]
}
