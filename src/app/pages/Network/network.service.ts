import { Injectable } from '@angular/core';
import { Contact } from './network';
import { contactList } from './network-data';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public Contact = contactList;
  public getContacts(): Contact[] {
    return this.Contact;
  }
}
