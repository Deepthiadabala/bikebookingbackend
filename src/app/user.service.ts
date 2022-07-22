import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Bike } from './bike';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://www.localhost:9090';
  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<Bike> {
    return this.http.post<Bike>(`${this.baseUrl}/user/createuser`, user);
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/admin/getAllUsers`);
  }

  bookBike(bikeId:number,userId:number): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/user/bookBike/${bikeId}/${userId}`,userId);

  }

  getUser(userName:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/user/getUserByName/${userName}`);
  }

  getUserById(userName:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/user/getUser/${userName}`);
  }

  
}
