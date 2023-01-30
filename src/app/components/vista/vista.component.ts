import { Component } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { UserTs } from '../../models/user.ts';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {


  constructor(public services: UserserviceService){}

  displayedColumns: string[] =['Nombre', 'Correo', 'Role', 'Opciones'];
  dataSource:any[] = [];

  // LLamado al metodo get
  lista: UserTs[]=[];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.services.getVista().subscribe({
      next:(vista: UserTs[])=>
      {this.lista = vista;
        this.dataSource = this.lista
      }
    })
  }

  eliminar(id: string){
    console.log(typeof id)
    this.services.deleteUser(id).subscribe(
      (data)=>console.log("eliminado correctamente el id: " + id)
    )
  }

}
