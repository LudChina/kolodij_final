import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { LoginComponent } from './Pages/login/login.component';
import { DetalleComponent } from './Components/detalle/detalle.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"alta", component: RegistroComponent},
  {path:"login", component: LoginComponent},
  {path:"personaje/:name", component:DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
