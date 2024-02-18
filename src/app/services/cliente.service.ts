import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../components/clientes/interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

   URL = environment.URL +'Cliente';

  constructor(private http: HttpClient) {}

getClients(){
  return this.http.get(this.URL);
}
editClient(cliente:Cliente){
  return this.http.put(this.URL,cliente)
}
createClient(cliente:Cliente){
  return this.http.post(this.URL,cliente)
}
deleteClient(idCliente:number){
  return this.http.delete(this.URL+'/'+idCliente)
}
}
