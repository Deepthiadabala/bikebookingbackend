import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Bike } from './bike';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BikeService {
 
  public search = new BehaviorSubject<string>("");
  private baseUrl = 'http://www.localhost:9090';
  constructor(private http: HttpClient) { }

  getBikesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bike/getAllBikes`);
  }

  getBikeById(id: number): Observable<Bike> {
    return this.http.get<Bike>(`${this.baseUrl}/bike/readBikeById/${id}`);
  }


  updateBike(id: number, bike: Bike): Observable<Bike> {
    return this.http.put<Bike>(`${this.baseUrl}/bike/updateBike/${id}`, bike);
  }


  

createBike(bike: Bike): Observable<Bike> {
  return this.http.post<Bike>(`${this.baseUrl}/bike/createBike`, bike);
}

deleteBike(id: any): Observable<String> {
  const httpOptions = {
    responseType: 'text' as 'json'
  };
  return this.http.delete<String>(`${this.baseUrl}/bike/deleteBikeById/${id}`, httpOptions)
}



}
