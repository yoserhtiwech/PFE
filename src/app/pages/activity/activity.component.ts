import { Component, OnDestroy, OnInit } from '@angular/core';
import {  ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { WebSocketService } from 'src/app/services/service/WebSocket.service';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/services';
import { UserResponse } from 'src/app/services/models/user-response';
import { Message } from '@stomp/stompjs';
import { HttpClient } from '@angular/common/http';


/** Constants used to fill up our data base. */
const COLORS = [
  'primary',
  'warning',
  'accent',
  'error',
  'success',
];
const status=[
  'free',
  'in call',
  'snooze',
  'off'
]

const NAMES = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus'
  
];

// card 1
interface topcards {
  id: number;
  color: string;
  title: string;
  subtitle: string;
}
@Component({
  
    templateUrl:'./activity.component.html',
   
  })
  export class AppActivityComponent implements OnInit   {
    allusers:UserResponse[]=[]
    // card 1
  topcards: topcards[] = [
    {
      id: 1,
      color: 'primary',
      title: '2',
      subtitle: 'Free',
    },
    {
      id: 2,
      color: 'warning',
      title: '0',
      subtitle: 'In Call',
    },
    {
      id: 3,
      color: 'accent',
      title: '11',
      subtitle: 'Total',
    },
    /* {
      id: 4,
      color: 'error',
      title: '0',
      subtitle: 'Snooze',
    }, */
    {
      id: 4,
      color: 'success',
      title: '9',
      subtitle: 'Off',
    },
    
  ];
  displayedColumns = [ 'name',  'status'];
  dataSource: MatTableDataSource<UserData>;
  onlineUsers: string[] = [];
  private onlineUsersSubscription: Subscription;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator =
    Object.create(null);
  @ViewChild(MatSort, { static: true }) sort: MatSort = Object.create(null);
  online: string[];
  onlineUsers2: any;
  booleanMap: { [key: string]: boolean; };

  constructor(private http: HttpClient,breakpointObserver: BreakpointObserver, private webSocketService: WebSocketService ,private UserService:UserService) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe((result) => {
      this.displayedColumns = result.matches
        ? ['name',  'status']
        : ['name',  'status']; },
      );

    
  }
  ngOnInit(): void { 
    this.UserService.findUsergroupMember().subscribe((users: UserResponse[]) => {
      this.allusers = users;
      const userData: UserData[] = this.allusers.map(user => ({
        fullName: user.fullname,
        status: 'off', // Set all users initially to "off" 
        color: this.getStatusColor('Off'),
      })); 
      this.refreshOnlineUsers()
      this.dataSource = new MatTableDataSource(userData);
      //this.updateUserStatus();
      //this.updateStatusCounts(this.dataSource.data);
    // Listen for changes in online users
     this.webSocketService.subscribeToTopic('/topic/online-users',(message: Message) => {
      if (message.body) {
       this.refreshOnlineUsers();
      // this.updateUserStatus();
       //this.updateStatusCounts(this.dataSource.data);
        // Parse the message body to an object (assuming it's JSON)
        this.onlineUsers2 = JSON.parse(message.body);
    }}) 
   /*  this.webSocketService.onlineUsersObservable().subscribe(onlineUsers => {
      this.online = onlineUsers;
      this.updateUserStatus();
      this.updateStatusCounts(userData);
    }); */
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // Now, update the status based on WebSocket information
     // this.updateUserStatus();
    });
  }
  updateUserStatus(): void {
    // Update the dataSource with the online status
    this.dataSource.data.forEach(user => {
      user.status = this.online.includes(user.fullName) ? 'Free' : 'off'; 
    // user.color= this.getStatusColor( user.status)
    }); this.updateStatusCounts(this.dataSource.data);
  
    // Trigger a refresh of the table
    this.dataSource._updateChangeSubscription();
  }
  updateStatusCounts(userData: UserData[]) {
    // Reset counts
    this.topcards.forEach(card => (card.title = '0'));

    // Count users by status
    userData.forEach(user => {
      const card = this.topcards.find(c => c.subtitle.toLowerCase() === user.status.toLowerCase());
      if (card) {
        card.title = (parseInt(card.title) + 1).toString();
      }
    });

    // Update the 'Total' card with the total number of users
    const totalCard = this.topcards.find(c => c.subtitle.toLowerCase() === 'total');
    if (totalCard) {
      totalCard.title = userData.length.toString();
    }
  }


  getStatusColor(status: string): string {
    const card = this.topcards.find(c => c.subtitle.toLowerCase() === status.toLowerCase());
    return card ? card.color : 'default';
  }
  

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
 /*  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
 */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
 
refreshOnlineUsers():void{
  this.http.get<{ [key: string]: boolean }>('http://localhost:8081/onlineUsers').subscribe((response: { [key: string]: boolean }) => {
    this.online = Object.keys(response),
    this.updateUserStatus()
  
    console.log(this.online);
  })
}}
  
  /** Builds and returns a new User. */
/* function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';
    const statu =
    status[Math.round(Math.random() * (status.length - 1))] +
    ' ' ;
  // tslint:disable-next-line - Disables all
  return {
    name: name,
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    status:statu
  };
} */
/* 
export interface UserData {
  
  name: string;
  color: string;
  status:string;
} */

export interface UserData {
  fullName: string; 
 // color:string;
  status: string;
}
   
  