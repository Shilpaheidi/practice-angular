import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';  // Replace with your API URL

  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`);
  }

  updateUserProfile(userData: any): Observable<any> {
    const formData = new FormData();
    formData.append('name', userData.name);
    formData.append('email', userData.email);
    if (userData.profilePicture) {
      formData.append('profilePicture', userData.profilePicture);
    }
    return this.http.put(`${this.apiUrl}/profile`, formData);
  }
}
