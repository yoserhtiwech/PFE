/* import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CallNotification } from '../models/CallNotification';  
import { MessageNotification } from '../models/MessageNotification'; 
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { HttpClient } from '@angular/common/http';
import { Client, Message, Stomp } from '@stomp/stompjs';
import {TokenService} from 'src/app/services/token/token.service';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService extends BaseService { 
  private onlineUsers :string[];
  private onlineUsersSubject = new Subject<string[]>();
  
  private callSubject = new Subject<CallNotification>();
  private messageSubject = new Subject<MessageNotification>();
  client: Client;
  onlineUsers2: any;
  constructor(config: ApiConfiguration, http: HttpClient ,private TokenService:TokenService
  ) {
    super(config, http);
    this.client = new Client({
      webSocketFactory: () => new SockJS('//localhost:8081/ws'),
      //reconnectDelay: 5000 // Try to reconnect every 5 seconds
    }); 
    console.log(this.onlineUsers);
  }

  connect(token: string): void {
    // Setting up the connection
    this.client.connectHeaders = {
      Authorization: `Bearer ${token}`
    };

    // Callback when connected
    this.client.onConnect = () => {
      console.log('Connected to WebSocket');

      // Subscribe to topics
      this.client.subscribe('/topic/online-users', (message: Message) => {  
        if (message.body) {
        console.log('Received online users message:', message.body);
         this.onlineUsers2 = JSON.parse(message.body);
        this.updateOnlineUsers(this.onlineUsers2);
        // Handle online users here, e.g., update a subject
        // this.onlineUsersSubject.next(onlineUsers); // Example of usage
     }else{console.log("noooooooooooooooooooo")} }); 
      
 
       this.client.subscribe('/topic/calls', (message: Message) => {
        this.callSubject.next(JSON.parse(message.body));
      });

      this.client.subscribe('/topic/messages', (message: Message) => {
        this.messageSubject.next(JSON.parse(message.body));
      });  
      console.log(this.onlineUsers2)
       console.log('Connected to WebSocket2');
    };

    // Callback when there is an error
    this.client.onStompError = (error) => {
      console.error('WebSocket connection error:', error);
    };

    // Activate the client
    this.client.activate();
  }  

  
  updateOnlineUsers(users: string[]): void {
    this.onlineUsers = [...users]; // Update with the new list of users
    console.log(this.onlineUsers); // Log the updated users
}

getOnlineUsers(): string[] {
    return this.onlineUsers; // Return the list of online users
}
  disconnect(): void {
    if (this.client && this.client.connected) {
      this.client.deactivate(); // Correct method to deactivate the client
      console.log('Disconnected from WebSocket');
    }
  }
    
  
   this.client.onConnect = () => {
    this.client.subscribe('/topic/calls', (message: Message) => {
      this.callSubject.next(JSON.parse(message.body));
    }); 
     this.client.subscribe('/topic/messages', (message: Message) => {
        this.messageSubject.next(JSON.parse(message.body));
      });
  
  
  this.client.activate();}
 
  getCallNotifications(): Observable<CallNotification> {
    return this.callSubject.asObservable();
  }

  getMessageNotifications(): Observable<MessageNotification> {
    return this.messageSubject.asObservable();
  }
}
 */ 
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CallNotification } from '../models/CallNotification';
import { MessageNotification } from '../models/MessageNotification';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { HttpClient } from '@angular/common/http';
import { Client, Message, Stomp } from '@stomp/stompjs';
import { TokenService } from 'src/app/services/token/token.service';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService extends BaseService {
  private onlineUsers: string[] = [];
  private onlineUsersSubject = new Subject<string[]>();

  private callSubject = new Subject<CallNotification>();
  private messageSubject = new Subject<MessageNotification>();
  private client: any  // Use 'any' to allow for StompClient
  private isConnected = false;
  constructor(config: ApiConfiguration, http: HttpClient, private tokenService: TokenService) {
    super(config, http);
  }

  connect(token: string): void {
    const socket = () => new SockJS('//localhost:8081/ws');
    this.client = Stomp.over(socket);

    this.client.connect(
      {
        Authorization: `Bearer ${token}`
      },
      () => {
        console.log('Connected to WebSocket'); 
        this.isConnected = true;
       /*  this.client.subscribe('/topic/online-users', (message: any) => {  
          if (message.body) {
          console.log('Received online users message:', message.body);
          
          // Handle online users here, e.g., update a subject
          // this.onlineUsersSubject.next(onlineUsers); // Example of usage
       }else{console.log("noooooooooooooooooooo")} });  */
        

        // Optionally, subscribe to calls and messages
        /* this.client.subscribe('/topic/calls', (message) => {
          this.callSubject.next(JSON.parse(message.body));
        });

        this.client.subscribe('/topic/messages', (message) => {
          this.messageSubject.next(JSON.parse(message.body));
        }); */

        
      },
      (error:any) => {
        console.error('WebSocket connection error:', error);
      }
    );
  }
  subscribe(topic:string,callback:any):void{
    const connected =this.client.connected
    if(connected){
      this.subscribeToTopic(topic,callback)
      return;
    }
   
  }
  subscribeToTopic(topic:string,callback:(message: any) => void):void { 
    this.client.subscribe(topic,(message: Message)=>{
      if(message.body){callback(message);}});
   
  }

  updateOnlineUsers(users: string[]): void {
    this.onlineUsersSubject.next(users); // Log the updated users
  } 
  onlineUsersObservable(): Observable<string[]> {
    return this.onlineUsersSubject.asObservable();
  }
  isConnectedStatus(): boolean {
    return this.client && this.client.connected && this.isConnected;
  }

  getOnlineUsers(): string[] {
    return this.onlineUsers; // Return the list of online users
  }

  disconnect(): void {
    if (this.client && this.client.connected) {
      this.client.disconnect(() => {
        console.log('Disconnected from WebSocket');
      }); 
      
    }
  }

  getCallNotifications(): Observable<CallNotification> {
    return this.callSubject.asObservable();
  }

  getMessageNotifications(): Observable<MessageNotification> {
    return this.messageSubject.asObservable();
  }
}
