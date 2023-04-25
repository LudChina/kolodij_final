import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from 'src/app/Interfaces/Personajes';
import { RickMortyService } from 'src/app/Services/rick-morty.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent{
  personaje!: Personaje
  constructor(
    private activateRoute:ActivatedRoute,
    private rickMortyService:RickMortyService
    ){
      const id:any = this.activateRoute.snapshot.paramMap.get("id")
      console.log(id)
      if(id)this.init(id)
  }
  async init(id:any){
    try{
       this.personaje = await this.rickMortyService.getById(id)
    }catch(e){
    console.log(e)
  }
}
}