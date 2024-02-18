import { Component } from '@angular/core';
import { Servicio } from './interfaces/servicio.interface';
import { ServicioService } from 'src/app/services/servicio.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent {
  servicios!:Servicio[];

  servicio: Servicio = {
    idServicio: 0,
    nombreServicio: '',
    descripcionServicio: '',
  };
  constructor(
    private servicioSvc: ServicioService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.obtenerServicios();
  }
  obtenerServicios() {
    this.servicioSvc.getServices().subscribe({
      next: (res: any) => {
        this.servicios = res;
      },
      error: (error) => {},
    });
  }

  crearServicio() {
    this.servicioSvc.createServices(this.servicio).subscribe({
      next: (res: any) => {
        this.obtenerServicios();
        this.toastr.success(res.message, 'Crear Servicio');
      },
      error: (err: any) => {
        this.toastr.error('Error', err.error.errors.message);
      },
    });
  }

  asignarServicio(servicio: Servicio) {
    this.servicio = servicio;
  }
  editarServicio() {
    this.servicioSvc.editServices(this.servicio).subscribe({
      next: (res: any) => {
        this.obtenerServicios();
        this.toastr.success(res.message, 'Editar Servicio');
      },
      error: (err: any) => {
        this.toastr.error('Error', err.error.errors.message);
      },
    });
  }
  eliminarServicio(idServicio: number) {
    this.servicioSvc.deleteServices(idServicio).subscribe({
      next: (res: any) => {
        this.obtenerServicios();
        this.toastr.success(res.message, 'Eliminar Servicio');
      },
      error: (err: any) => {
        this.toastr.error('Error', err.error.errors.message);
      },
    });
  }
}
