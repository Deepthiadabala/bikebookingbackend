import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bike } from './bike';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
 

  private baseUrl = 'http://www.localhost:9090';
  constructor(private http: HttpClient) { }

  getBikesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bike/getAllBikes`);
  }

  getBikeById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/bike/readBikeById/${id}`);
  }

  

createBike(bike: Bike): Observable<Object> {
  return this.http.post(`${this.baseUrl}/bike/createBike`, bike);
}


}
