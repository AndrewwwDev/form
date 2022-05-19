import { UsuarioModel } from './../models/usuario.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// https://form-200-default-rtdb.firebaseio.com

const URL = environment.urlServer;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http:HttpClient ) {}

  crearUsuario(usuario:UsuarioModel){

    return this.http.post(`${URL}/usuarios.json`, usuario)  

  }
}
