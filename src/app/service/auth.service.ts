import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private users = [{username: 'user',password:'password'}];

login(username:string,password:string):Observable<boolean>{
const isAuthenticated =  this.users.some(user => user.username === username && 
  user.password === password
);

return of(isAuthenticated).pipe(delay(500))
}
  constructor() { }
}
