import { Component, OnInit } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

 // constructor() { }

  //ngOnInit(): void { }

//Variable para visibilidad de los botones

btnCadastro:boolean= true;

//JSON de Clientes

clientes:Cliente[]= [];

//Constructor
constructor (private servico:ClienteService){}


//Método de seleção
selecionar():void{
this.servico.seleccionar()
.subscribe(retorno=> this.clientes=retorno);
}

//Metodo de inicializacion
ngOnInit(){
this.selecionar();
}

}
