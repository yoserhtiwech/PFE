import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { course } from './course';
import { UserService } from 'src/app/services/services';
import { TokenService } from 'src/app/services/token/token.service';
import { GroupeService } from 'src/app/services/services';
import { UserResponse } from 'src/app/services/models/user-response';
import { CallPopupComponent } from './call-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { _filter } from '../forms/form-elements';
import { map, startWith } from 'rxjs/operators';


export interface UserGroup {
  letter: string;
  users: UserResponse[];
}

@Component({
  selector: 'app-courses',
  templateUrl: './dialer.component.html',
 // imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
  styleUrls: ['./dialer.component.scss'],
})
export class AppDialerComponent implements OnInit { 
  Form = this._formBuilder.group({
    userGroup: '',
  });

  userGroups: UserGroup[] = [];

  userGroupOptions: Observable<UserGroup[]>;

  
  courseList: course[] = [];
  selectedCategory = 'All';

  users: UserResponse;
  userPhoneNumber: number; 
  userNumbers: number[]
  filteredNumbers: number[];
  members: UserResponse[];

  constructor( private UserService :UserService ,private _formBuilder: FormBuilder,
    private GroupeService:GroupeService,private TokenService:TokenService,private dialog: MatDialog) {}
    
    
    
    searchQuery: string = '';

  appendToDisplay(value: string): void {
    const currentQuery = this.Form.get('userGroup')!.value || '';
    this.Form.get('userGroup')!.setValue(currentQuery + value);
  }
  searchResults: UserResponse[] = [];
ngOnInit(): void {
    this.fetchAndGroupUsers();

    this.userGroupOptions = this.Form.get('userGroup')!.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterGroup(value || ''))
    );
      
    this.UserService.findUserById(this.TokenService.getUserId()).subscribe((user: UserResponse) => 
        {
        this.users = user; 
        this.userPhoneNumber=user.numbers; 
      }); 
    }
   
    receiveCall(callerName: string) {
      const dialogRef = this.dialog.open(CallPopupComponent, {
        width: '300px',
        data: { callerName: callerName }
      });
    
      dialogRef.afterClosed().subscribe((result: string) => {
        if (result === 'answer') {
          this.answerCall();
        } else {
          this.hangUp();
        }
      });
    }answerCall() {
      // Logic to answer the call
    }
    hangUp() {
      // Logic to hang up the call
    }    

    private fetchAndGroupUsers() {
      this.UserService.findUsergroupMember().subscribe((response:UserResponse[])=>{this.members=response
    console.log(this.members)      
      // Example: Replace this with your actual service call to fetch users
      // Group users by the first letter of their fullname
      const groupedUsers: { [key: string]: UserResponse[] } = this.members.reduce((groups, user) => {
        const firstLetter = user.fullname.charAt(0).toUpperCase();
        groups[firstLetter] = groups[firstLetter] || [];
        groups[firstLetter].push(user);
        return groups;
      }, {} as { [key: string]: UserResponse[] });  
  
      // Convert the grouped users into an array of UserGroup
      this.userGroups = Object.keys(groupedUsers)
        .sort()
        .map((letter) => ({
          letter,
          users: groupedUsers[letter],
        }));} ) 
    }
  
    private _filterGroup(value: string): UserGroup[] {
  if (value) {
    return this.userGroups
      .map((group) => ({
        letter: group.letter,
        users: _filter(group.users.map(user => user.fullname), value)
          .map(fullname => group.users.find(user => user.fullname === fullname))
          .filter(user => user !== undefined) as UserResponse[], // Filter out undefined values
      }))
      .filter((group) => group.users.length > 0);
  }

  return this.userGroups;
} 
initiateCall(): void { 
  
  const callUrl = 'http://localhost:4200/landingpage'; // Replace with your call URL
  const newWindow = window.open(callUrl, '_blank', 'width=1000,height=600');


    // Check if the window was successfully created
    if (newWindow) {
      newWindow.focus(); // Bring the new window to the front
    } else {
      console.error('Failed to open a new window.');
    }
  }
}
    

