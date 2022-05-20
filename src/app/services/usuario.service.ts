import { UsuarioModel } from './../models/usuario.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// https://form-200-default-rtdb.firebaseio.com

const URL = environment.urlServer;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  crearUsuario(usuario: UsuarioModel) {
    return this.http.post(`${URL}/usuarios.json`, usuario).pipe(
      map((res: any) => {
        usuario.id = res.name;
        return usuario;
      })
    );
  }

  actualizarUsuario(usuario: UsuarioModel) {
    const usuarioTemp = {
      ...usuario,
    };

    delete usuarioTemp.id;

    return this.http.put(`${URL}/usuarios/${usuario.id}.json`, usuarioTemp);
  }

  getUsuarios() {
    return this.http.get(`${URL}/usuarios.json`).pipe(map(this.arreglo));
  }
  getUsuario(id: string) {
    return this.http.get(`${URL}/usuarios/${id}.json`);
  }
  private arreglo(usuariosObj: any) {
    const usuarios: UsuarioModel[] = [];

    if (usuariosObj === null) {
      return null;
    }

    for (let resgistro in usuariosObj) {
      usuariosObj[resgistro].id = resgistro;
      usuarios.push(usuariosObj[resgistro]);
    }
    console.log(usuarios);
    return usuarios;
  }
}
