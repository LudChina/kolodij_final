import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { Personaje } from '../Interfaces/Personajes';
@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(private http:HttpClient) { }


  getAll() {
    return lastValueFrom(this.http.get("https://rickandmortyapi.com/api/character").pipe(map((value:any)=>value.results)))
  }

  getById(id:number) {
    return lastValueFrom(this.http.get<Personaje>(`https://rickandmortyapi.com/api/character/${id}`))
  }


}
