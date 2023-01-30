import { Component } from '@angular/core';
import { AutenticacionserviceService } from '../../services/autenticacionservice.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AutenticacionserviceService,
    private router: Router){}

    hide = true;


    routeRedirect = '';

    // valor11
    value11: any;

    login(){
      this.authService.login();
      this.routeRedirect = this.authService.urlUsuarioIntentaAcceder;
      this.authService.urlUsuarioIntentaAcceder='';
      this.router.navigate([this.routeRedirect]);
    }
}
