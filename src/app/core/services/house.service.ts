import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HouseType} from '../models/house-type';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  constructor(private http: HttpClient )
  { }

  getHouses(): Observable<HouseType[]> {
    return this.http.get<HouseType[]>(environment.apiUrl + 'houses');
  }

  getHouse(houseId: string | null): Observable<HouseType> {
    return this.http.get<HouseType>(environment.apiUrl + 'houses/' + houseId);
  }
}
