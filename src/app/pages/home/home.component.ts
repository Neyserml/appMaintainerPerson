import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public dataUsuario;
  public documentForm : FormGroup
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.documentForm = new FormGroup({
      codigo : new FormControl(''),
      nombre : new FormControl(''),
      apellido : new FormControl(''),
      edad : new FormControl('')
    });
    this.getUser();
  }
  public getUser(){
    return this.userService.getPersona().then(todos => {
      this.dataUsuario = todos;
     console.log("data persona:",this.dataUsuario)
    });
  }

  public edit(codigo,nombre,apellido,edad){
  this.documentForm.controls['codigo'].setValue(codigo);
  this.documentForm.controls['nombre'].setValue(nombre);
  this.documentForm.controls['apellido'].setValue(apellido);
  this.documentForm.controls['edad'].setValue(edad);
  }
  public save(){
    let codigo= this.documentForm.controls['codigo'].value;
    let nombre= this.documentForm.controls['nombre'].value;
    let apellido= this.documentForm.controls['apellido'].value;
    let edad= this.documentForm.controls['edad'].value;
    return this.userService.editPersona(codigo,nombre,apellido,edad).then(() => {
      return this.getUser();
    });
  
  }
}
