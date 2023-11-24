import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from 'src/services/api.service';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private Api: ApiService) {}
  public mensaje = ""
  user = {
    usuario: "",
    password: ""
  }

  
  enviarUser() {
    if (this.user.usuario != "") {
      let navigationExtras: NavigationExtras = {
        state: { user: this.user }
      }
      this.router.navigate(['/alumno'], navigationExtras);
    } else {
      this.mensaje = "Debe ingresar sus credenciales";
    }
  }

  logIn(){
    this.Api.getData().subscribe(data => {
      this.logIn = data
      console.log(this.logIn)
    });
    this.router.navigate(['alumno'])

  }


}