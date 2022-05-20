import { UsuarioService } from './../../services/usuario.service';
import { UsuarioModel } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarios: UsuarioModel[] = [];

  constructor(private usuarioSvc: UsuarioService) {}

  ngOnInit() {
    this.usuarioSvc.getUsuarios().subscribe((res: any) => {
      this.usuarios = res;
    });
  }
}
