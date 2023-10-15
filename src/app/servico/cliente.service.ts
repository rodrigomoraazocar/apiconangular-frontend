import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Cliente } from '../modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //Url de la Api

   private url:string='https://apiconangular-production.up.railway.app';


  // Constructor
  constructor( private http:HttpClient) { }



//Metodo para selecionar todos os clientes

seleccionar():Observable<Cliente[]>{
  return this.http.get<Cliente[]>(this.url);
}

}