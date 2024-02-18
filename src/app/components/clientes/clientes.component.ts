import { Component } from '@angular/core';
import { Cliente } from './interfaces/cliente.interface';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {

  clientes!:Cliente[]

  constructor(private clienteSvc: ClienteService){

  }

  ngOnInit(){
    this.getClients();
  }
  getClients(){
    this.clienteSvc.getClients().subscribe(
      {
        next:(res:any)=>{
          this.clientes = res
        },
        error:(error)=>{

        }
      }
    )
  }
}
