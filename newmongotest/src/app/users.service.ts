import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uri = 'http://localhost:4000/users';
  constructor(private http: HttpClient) { }
  addUser(FirstName,LastName,Email, Password) {
    const obj = {
      FirstName,
      LastName,
      Email,
      Password
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
}
getUsers() {
  return this
         .http
         .get(`${this.uri}`);
}
editUser(id) {
  return this
          .http
          .get(`${this.uri}/edit/${id}`);
  }
  updateUser(FirstName, LastName, Email, id) {
    const obj = {
      FirstName,
      LastName,
      Email
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
}
deleteUser(id) {
  return this
            .http
            .get(`${this.uri}/delete/${id}`);
}
checkUser(Email,Password){
  const obj2 = {
    Email,Password
  };
  return this 
  .http.post(`${this.uri}/check`,obj2).subscribe(res=>console.log("done"));
}
}