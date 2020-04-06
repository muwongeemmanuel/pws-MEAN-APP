import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../../schemas/contact';
// import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import 'rxjs/Rx';
// import { Http2SecureServer } from 'http2';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private http: HttpClient) { }

  //retrieving contacts
  // getContacts(){
  //   return this.http.get ('http://localhost:3000/contact')
  //       .map(res => res.json())
  // }
  getContacts(){
    return this.http.get ('http://localhost:3000/contact')
        .pipe(map((res: any) => res))
  }
  // getContacts(){
  //   return this.http.get ('http://localhost:3000/contact').pipe(map(data => {})).subscribe(result => {console.log(result);});
  // }
  //add contact method
  addContact(newContact) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/contact',newContact,{headers:headers})
          .pipe(map((res: any) => res))
  }
  //delete contact method
  deleteContact(id) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
        return this.http.delete('http://localhost:3000/contact/'+id)
          .pipe(map((res: any) => res))
  }
}
