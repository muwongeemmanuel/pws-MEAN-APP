import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact/contact.service';
import { Contact } from '../../schemas/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  contacts: Contact[];
  // contact: Contact;
  _id: string;
  contact_string: string;
  category: string
  client: string;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContact();
    // console.log("Testing")
  }
  getContact() {
    this.contactService.getContacts()
      .subscribe( contacts => this.contacts = contacts);
  }
  addContact() {
    const newContact = {
      contact_string: this.contact_string,
      category: this.category,
      client: this.client,
    }
    this.contactService.addContact(newContact)
      .subscribe(contact => {
        this.contacts.push(contact)
      })
  }
  //deleting contact
  deleteContact(id:any) {
    var contacts = this.contacts;
    this.contactService.deleteContact(id)
      .subscribe(data => {
        if(data.n==1){
          for(var i=0; i<contacts.length; i++){
            if(contacts[i]._id == id){
              contacts.splice(i,1);
            }
          }
        }
      })
  }

}
