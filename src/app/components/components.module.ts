import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { VistaComponent } from './vista/vista.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material Angular
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {PasswordModule} from 'primeng/password';
import { AgregarComponent } from './agregar/agregar.component';
import {MultiSelectModule} from 'primeng/multiselect';
import {ButtonModule} from 'primeng/button';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';


@NgModule({
  declarations: [
    LoginComponent,
    MenuComponent,
    VistaComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // Material Angular
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    // Darle estilos a los inputs
    MatInputModule,
    PasswordModule,
    MultiSelectModule,
    ButtonModule
  ],
  exports:[
    LoginComponent,
    MenuComponent,
    VistaComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent
  ]
})
export class ComponentsModule { }
