import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Cliente } from '../modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //Url de la Api

   private url:string='http://localhost:8080';


  // Constructor
  constructor( private http:HttpClient) { }



//Metodo para selecionar todos os clientes

seleccionar():Observable<Cliente[]>{
  return this.http.get<Cliente[]>(this.url);
}

//Método para cadastrar cliente

cadastrar(obj:Cliente):Observable<Cliente>{
  return this.http.post<Cliente>(this.url, obj);
}

}