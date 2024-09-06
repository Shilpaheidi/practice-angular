import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  getUsers(): Observable<any[]> {
    const users = [
      { name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active' },
      { name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', status: 'Inactive' },
      // Add more mock users here
    ];
    return of(users);
  }
}
