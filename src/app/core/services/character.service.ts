import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import { CharacterType } from '../models/character-type';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient )
  { }

  getCharacters(): Observable<CharacterType[]> {
    return this.http.get<CharacterType[]>(environment.apiUrl + 'characters');
  }

}
