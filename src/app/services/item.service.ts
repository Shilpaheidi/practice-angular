import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }


  getItems(page:number,limit:number):Observable<any>{
    const params = {_page:page,_limit:limit.toString()};
    return this.http.get<any[]>(this.apiUrl,{params, observe: 'response'})

  }
}
