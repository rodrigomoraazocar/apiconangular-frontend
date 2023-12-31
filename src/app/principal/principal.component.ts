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

//Metodo para editar clientes

editar():void{
  this.servico.editar(this.cliente)
  .subscribe(retorno=> {

    //Obtener posición del vector done está el cliente
    let posicao = this.clientes.findIndex(obj =>{
      return obj.codigo ==retorno.codigo;
    });

    //Alterar los datos del cliente en el vector
      this.clientes[posicao] =retorno;

      //Limpiar formulario
      this.cliente= new Cliente();

    //Visibilidad de los botones
    this.btnCadastro =true;

    //Visibilidad de la tabla
    this.tabela = true;

    //Mensaje
    alert('Cliente alterado com sucesso!');



  });
}

//Metodo para remover clientes

remover():void{
  this.servico.remover(this.cliente.codigo)
  .subscribe(retorno=> {

    //Obtener posición del vector donde está el cliente
    let posicao = this.clientes.findIndex(obj =>{
      return obj.codigo ==this.cliente.codigo;
    });

    //Remover cliente del vector
      this.clientes.splice(posicao,1);

      //Limpiar formulario
      this.cliente= new Cliente();

    //Visibilidad de los botones
    this.btnCadastro =true;

    //Visibilidad de la tabla
    this.tabela = true;

    //Mensaje
    alert('Cliente removido com sucesso!');



  });
}

//Metodo para cancelar
cancelar():void{


   //Limpiar formulario
   this.cliente= new Cliente();

   //Visibilidad de los botones
   this.btnCadastro =true;

   //Visibilidad de la tabla
   this.tabela = true;

}



//Metodo de inicializacion
ngOnInit(){
this.selecionar();
}

}
