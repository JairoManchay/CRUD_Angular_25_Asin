import { Component } from '@angular/core';
import { AutenticacionserviceService } from '../../services/autenticacionservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  usuarioLogueado = false;

  // Instanciando el service de conexion
  constructor(public autenticacion:AutenticacionserviceService){

  }

  ngOnInit(): void {
    this.usuarioLogueado = this.autenticacion.isLoggedIn('');
    this.autenticacion.changeLoginStatus$.subscribe(
      (loggedStatus: boolean)=>{
        this.usuarioLogueado = loggedStatus;
      }
    )
  }


  logout(){
    this.autenticacion.logout();
  }
}
