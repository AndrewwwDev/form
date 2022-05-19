// import { UsuarioComponent } from './../pages/usuario/usuario.component';
export class UsuarioModel {
  id?: string;
  nombre?: string;
  email?:string;
  estado:boolean;


  constructor(){
      this.estado=true;
  }
}
