import { Component } from '@angular/core';
import { RickMortyService } from '../rick-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  personajes:any
  constructor(private personajeService: RickMortyService) {
     //this.init()
     this.personajes = this.personajeService.getAll()
    
      }
      //async init(){
        //try{
          //const data:any = await this.personajeService.getAll()
          //this.personajes= data.results


       // }catch (e){
         // console.log(e)
        //}
        
     // }
    }