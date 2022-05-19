import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  usuario = new UsuarioModel();

  constructor(private usuarioSvc: UsuarioService) {}

  ngOnInit(): void {}

  guardar(forma: NgForm) {
    if (this.usuario.id) {
      this.usuarioSvc.actualizarUsuario(this.usuario).subscribe(res=> {
        console.log(res);
      });
    } else {
      this.usuarioSvc.crearUsuario(this.usuario).subscribe((res) => {
        console.log(res);
      });
    } 
  }
}
