import { Component, OnInit, Inject, Optional } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Contact } from './network';
import { ContactService } from './network.service';
import { UserService } from 'src/app/services/services';
import { GroupeService } from 'src/app/services/services';
import { UserResponse } from 'src/app/services/models/user-response';
import { TokenService } from 'src/app/services/token/token.service';
import { GroupeResponse } from 'src/app/services/models/groupe-response';

export interface ContactData {
  closeResult: string;
  contacts: Contact[];
  searchText: any;
  txtContactname: string;
  txtContactPost: string;
  txtContactadd: string;
  txtContactno: string;
  txtContactinstagram: string;
  txtContactlinkedin: string;
  txtContactfacebook: string;
}

@Component({
  templateUrl: './network.component.html',
})
export class AppNetworkComponent implements OnInit {
  closeResult = '';
  contacts: UserResponse[] = [];

  searchText: any;
  txtContactname = '';
  txtContactPost = '';
  txtContactadd = '';
  txtContactno = '';
  txtContactinstagram = '';
  txtContactlinkedin = '';
  txtContactfacebook = '';
  user: UserResponse;
  userGroup: string;
  dataSource: any;
  members: UserResponse[];
  members2:UserResponse[]
  contacts1: UserResponse[];
  displayContacts: boolean = true;

  constructor(
    public dialog: MatDialog,
    private contactService: ContactService,
    private UserService :UserService ,
    private GroupeService:GroupeService,
    private TokenService:TokenService
  ) {
   // this.contacts = this.contactService.getContacts();
    //this.contacts1 = this.contactService.getContacts();
    
  }
  openDialog(action: string, obj: any): void {
    obj.action = action;
    const dialogRef = this.dialog.open(AppNetworkDialogContentComponent, {
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Add') {
        this.addContact(result.data);
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.contacts = this.filter(filterValue);
  }

  filter(v: string): UserResponse[] {
    const contact2=[...this.contacts1];
    return contact2
      .filter(
        (x) => x.fullname.toLowerCase().indexOf(v.toLowerCase()) !== -1
      );
  }

  ngOnInit(): void {
   this.getEquipe()
   
   
  }
  getEquipe(){
    this.displayContacts = false;
    this.UserService.findUsergroupMember().subscribe((response:UserResponse[])=>{this.contacts=response,this.contacts1=response
      console.log(this.members)})
  }
  getContact() {
    this.displayContacts = true;
   this.contacts=[];
   }


  // tslint:disable-next-line - Disables all
  addContact(row_obj: ContactData): void {
   /*  this.contacts.unshift({
      contactimg: 'assets/images/profile/user-1.jpg',
      contactname: row_obj.txtContactname,
      contactpost: row_obj.txtContactPost,
      contactadd: row_obj.txtContactadd,
      contactno: row_obj.txtContactno,
      contactinstagram: row_obj.txtContactinstagram,
      contactlinkedin: row_obj.txtContactlinkedin,
      contactfacebook: row_obj.txtContactfacebook,
    }); */
  }
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-dialog-content',
  templateUrl: 'network-dialog-content.html',
})
// tslint:disable-next-line: component-class-suffix
export class AppNetworkDialogContentComponent {
  action: string;
  // tslint:disable-next-line - Disables all
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<AppNetworkDialogContentComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ContactData
  ) {
    // console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  doAction(): void {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog(): void {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
function getContact(): ((error: any) => void) | null | undefined {
  throw new Error('Function not implemented.');
}

