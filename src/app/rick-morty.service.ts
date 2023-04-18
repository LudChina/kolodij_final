import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(private http:HttpClient) { }


  getAll() {
    return lastValueFrom(this.http.get("https://rickandmortyapi.com/api/character"))
  }


}
