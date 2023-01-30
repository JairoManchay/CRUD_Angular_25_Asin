import { Component } from '@angular/core';
import { RoleTs } from 'src/app/listRole/role.ts';
import { TitleTs } from 'src/app/listTitle/title.ts';
import { UserTs } from '../../models/user.ts';
import { UserserviceService } from '../../services/userservice.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  constructor(private userService:UserserviceService ){}



  modelo: UserTs[]=[{
    Id: 0,
    Title: TitleTs.Mr,
    Nombre: '',
    Apellido: '',
    Correo: '',
    Role: RoleTs.user,
    Contrasena: ''
  }]


  // Creando el array para title
  tituloArr: any[]= [];
  roleArr: any[]=[];
  // Array para guardar los registros
  dataMo: any[] = [];
  // boolean, que te avise el registro
  confirmado: boolean = false;
  mensaje: string="Agregado Correctamente";



  ngOnInit(): void {


    for(let item in TitleTs){
      if(isNaN(Number(item))){
        this.tituloArr.push({texto: item, value: TitleTs[item]})
      }
    }

    for(let item in RoleTs){
      if(isNaN(Number(item))){
        this.roleArr.push({texto: item, value: RoleTs[item]})
      }
    }
    console.log(this.roleArr);

  }

  Registrar(){
    this.confirmado=true;
    this.userService.postUser(this.modelo[0]).subscribe(
      (usuario: UserTs)=>console.log(usuario)
    )
    this.modelo=[
      {
        Id: 0,
        Title: TitleTs.Mr,
        Nombre: '',
        Apellido: '',
        Correo: '',
        Role: RoleTs.user,
        Contrasena: ''
      }
    ]
  }


}
