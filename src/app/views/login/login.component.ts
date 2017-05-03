import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LoginService } from '../../service/login.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  providers: [LoginService]
})
export class LoginComponent{

  private loginError = false;

  constructor(private loginService: LoginService, private router: Router){

  }

  onSelect(name: string): void{
    this.loginError = false;
    localStorage.setItem("userName", name);
    var loginResult = this.loginService.getLogerResult(name);
    //Consultar al servicio que tiene los usuarios

    //Si el usuario es valido, navegar a la vista de votaciones disponibles.

    //Si no es válido, sacar un toast de user no válido.
    if(loginResult){
      console.log("Usuario correcto");
      this.router.navigate(["/voting"]);
    }else{
      this.loginError = true;
    }
  }

}
