import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionserviceService {

  constructor() { }

  readonly islogged = 'ok';
  public urlUsuarioIntentaAcceder = '';

  public changeLoginStatusSubj = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubj.asObservable();

  login(){
    localStorage.setItem(this.islogged, 'true');
    this.changeLoginStatusSubj.next(true);
  }

  logout(){
    localStorage.removeItem(this.islogged);
    this.changeLoginStatusSubj.next(false);
  }

  isLoggedIn(url:string){
    const islogged = localStorage.getItem(this.islogged);
    if(!islogged){
      this.urlUsuarioIntentaAcceder = url;
      return false;
    }
    return true;
  }
}
