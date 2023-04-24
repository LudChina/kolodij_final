import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from 'src/app/Interfaces/Personajes';
import { RickMortyService } from 'src/app/Services/rick-morty.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  personaje!:Personaje

  constructor(
    private activateRoute:ActivatedRoute,
    private personajeService:RickMortyService
  ){
    const id:any = this.activateRoute.snapshot.paramMap.get("id")
    console.log(id)
    if(id)this.init(id)
  }

  async init(id:any){
    try{
     const personaje:any = await this.personajeService.getById(id)
     this.personaje = {...personaje}

    }catch(e){
      console.log(e)
    }
  }

}
