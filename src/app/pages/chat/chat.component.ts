import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { messages } from './chat-data';
import { UserService } from 'src/app/services/services'; 
import { TokenService } from 'src/app/services/token/token.service';
import { UserResponse } from 'src/app/services/models/user-response';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class AppChatComponent implements OnInit {
  user:UserResponse;
  userGroup: number;
  sidePanelOpened = true;
  msg = '';

  // MESSAGE
  selectedMessage: any;
  //public messages: any[] = [];
  public notifications: any[] = [
    // Add your notifications data here
  ];
  public SMS: any[] = [
    // Add your general messages data here
  ];
  public conversation: any[] = [
    // Add your alerts data here
  ];
  public messages: Array<any> = messages;
  // tslint:disable-next-line - Disables all
  // messages: Object[] = messages;
   // Track the selected button

   public selectedButton: string;
  constructor(private UserService:UserService,private TokenService:TokenService) {
    this.selectedMessage = "";
  }
  ngOnInit(): void {
    this.UserService.findUserById(this.TokenService.getUserId()).subscribe((user: UserResponse) => {
      this.user = user;
     // this.userGroup=user.groupe.id;
    });
   // this.messages = this.SMS;
    this.selectedButton = 'SMS';
    //this.updateMessages(this.selectedButton);
  }
  updateMessages(type: string): void {
    if (type === 'notifications') {
      this.messages = this.notifications;
    } else if (type === 'SMS') {
      this.messages = this.SMS;
    } else if (type === 'conversation') {
      this.messages = this.conversation;
    }
    this.selectedButton = type; // Update the selected button
  }
  isSelected(type: string): boolean {
    return this.selectedButton === type; // Check if the button is selected
  }

  @ViewChild('myInput', { static: true }) myInput: ElementRef =
    Object.create(null);

  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

  // tslint:disable-next-line - Disables all
  onSelect(message: Object[]): void {
    this.selectedMessage = message;
  }

  OnAddMsg(): void {
    this.msg = this.myInput.nativeElement.value;

    if (this.msg !== '') {
      this.selectedMessage.chat.push({
        type: 'even',
        msg: this.msg,
        date: new Date(),
      });
    }

    this.myInput.nativeElement.value = '';
  } 
  getNotification():void{}
  getSMS():void{};
  getConversation():void{};
}
