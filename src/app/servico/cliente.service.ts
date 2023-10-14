import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //Url de la Api

  private url:string='https://apiconangular-production.up.railway.app'


  // Constructor
  constructor(private http:HttpClient) { }
}
