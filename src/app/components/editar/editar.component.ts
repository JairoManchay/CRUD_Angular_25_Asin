import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { UserserviceService } from 'src/app/services/userservice.service';
import { UserTs } from '../../models/user.ts';
import { TitleTs } from '../../listTitle/title.ts';
import { RoleTs } from '../../listRole/role.ts';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  constructor(private route: ActivatedRoute, private service: UserserviceService, private rutas: Router){}



  modelo: UserTs[]=[{
    Id: 0,
    Title:TitleTs.Mr,
    Nombre: '',
    Apellido: '',
    Correo: '',
    Role: RoleTs.user,
    Contrasena: ''
  }]

  // Creando el array para title
  tituloArr: any[]= [];
  roleArr: any[]=[];

  // // Parametros del ID para recibirlo
  empleadoId!: UserTs;
  empleadoArrId: any=[];
  empleadoIdCambiar: any;


  ngOnInit(): void {

    // ParametroId, traer
    this.empleadoIdCambiar = this.route.snapshot.params['id'];

    // Bucle para obtener el texto de las listas
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

    // Funcion para el getBusquedaID
    this.route.params.pipe(
      switchMap(({id})=>
      this.service.getUserId(id)
      ),
      tap(console.log)
    ).subscribe(empId=>{
      this.empleadoId =empId[0];
      this.empleadoArrId.push(this.empleadoId)
    })

  }



  postUserId(empleado: UserTs){

    this.modelo=[{
      Id: this.empleadoIdCambiar,
      Title:empleado.Title,
      Nombre: empleado.Nombre,
      Apellido: empleado.Apellido,
      Correo: empleado.Correo,
      Role: empleado.Role,
      Contrasena: empleado.Contrasena
    }]
        this.service.putUser(this.modelo[0]).subscribe({
          next: (usuario: UserTs) => {
            console.log(usuario);
          },
          error: (e) => {console.error(e);},
        })

    }
}
