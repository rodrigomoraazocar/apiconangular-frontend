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

  //Objeto do tipo Cliente

  cliente = new Cliente();



//Variable para visibilidad de los botones

btnCadastro:boolean= true;

//Variable para visibilidad de la tabla
tabela:boolean=true;



//JSON de Clientes

clientes:Cliente[]= [];

//Constructor
constructor (private servico:ClienteService){}


//Método de seleção
selecionar():void{
this.servico.seleccionar()
.subscribe(retorno=> this.clientes=retorno);
}

//Metodo de cadastro

cadastrar():void{
  this.servico.cadastrar(this.cliente)
  .subscribe(retorno => {
    
    // Registrar el cliente en el vector
    this.clientes.push(retorno);

 //Limpiar formulario
 this.cliente = new Cliente();

 //Mensaje
 alert ('Cliente cadastrado com sucesso!');

  
  });
  }

//Metodo para seleccionar un cliente especifico
selecionarCliente(posicao:number):void{

//seleccionar cliente en el vector
this.cliente=this.clientes[posicao];

//visibilidad de los botones
this.btnCadastro=false;

//Visibilidad de la tabla
this.tabela=false;

}


//Metodo de inicializacion
ngOnInit(){
this.selecionar();
}

}
