import { Component } from '@angular/core';
import { Cliente } from './interfaces/cliente.interface';
import { ClienteService } from 'src/app/services/cliente.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent {
  clientes!: Cliente[];

  cliente: Cliente = {
    idCliente: 0,
    nombreCliente: '',
    correoCliente: '',
  };
  constructor(
    private clienteSvc: ClienteService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.obtenerClientes();
  }
  obtenerClientes() {
    this.clienteSvc.getClients().subscribe({
      next: (res: any) => {
        this.clientes = res;
      },
      error: (error) => {},
    });
  }

  crearCliente() {
    this.clienteSvc.createClient(this.cliente).subscribe({
      next: (res: any) => {
        this.obtenerClientes();
        this.toastr.success(res.message, 'Crear Cliente');
      },
      error: (err: any) => {
        this.toastr.error('Error', err.error.errors.message);
      },
    });
  }

  asignarCliente(cliente:Cliente){
 this.cliente=cliente
  }
  editarCliente() {
    this.clienteSvc.editClient(this.cliente).subscribe({
      next: (res: any) => {
        this.obtenerClientes();
        this.toastr.success(res.message, 'Editar Cliente');
      },
      error: (err: any) => {
        this.toastr.error('Error', err.error.errors.message);
      },
    });
  }
  eliminarCliente(idCliente:number){
    this.clienteSvc.deleteClient(idCliente).subscribe({
      next:(res:any)=>{
        this.obtenerClientes();
        this.toastr.success(res.message, 'Eliminar Cliente');
      },
      error:(err:any)=>{
      this.toastr.error('Error', err.error.errors.message);
      }
    })
  }
}
