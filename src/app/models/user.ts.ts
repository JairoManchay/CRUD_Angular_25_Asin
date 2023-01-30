import { RoleTs } from '../listRole/role.ts';
import { TitleTs } from '../listTitle/title.ts';
export interface UserTs {

  // Estructura que por ahora quiero traer
  Id: number;
  Title: TitleTs.Mr;
  Nombre: string;
  Apellido: string;
  Correo: string;
  Role: RoleTs.user;
  Contrasena: string;
}
