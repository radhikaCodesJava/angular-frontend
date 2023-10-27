import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
        this.usersUrl = 'http://localhost:1234/api/users';
       // this.usersUrl = '/url/api/users';
   }

   public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public update(user: User){
     return this.http.post<User>(this.usersUrl, user);
  }

  public deleteUser(user: User){
     return this.http.post<User>(this.usersUrl, user);
  }

}
