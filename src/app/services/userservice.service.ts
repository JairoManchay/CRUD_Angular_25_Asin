import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserTs } from '../models/user.ts';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  getVista():Observable<UserTs[]>{
    let ruta1 = environment.apiUrl+'vista/';
    return this.http.get<UserTs[]>(ruta1);
  }

  postUser(usuario: UserTs):Observable<UserTs>{
    let nuevo = environment.apiUrl + 'nuevo/';
    return this.http.post<UserTs>(nuevo, usuario);
  }

  // Traer por Id
  getUserId(userId: number):Observable<UserTs>
  {
    let urlId = environment.apiUrl +'buscar/'+ userId;
    return this.http.get<UserTs>(urlId);
  }

  putUser(usuario: UserTs):Observable<UserTs>{
    let editar = environment.apiUrl + 'editar/';
    return this.http.put<UserTs>(editar, usuario);
  }

  deleteUser(userId: string): Observable<UserTs> {
    const url = environment.apiUrl + 'eliminar/' + userId;
    return this.http.delete<UserTs>(url);
  }
}
