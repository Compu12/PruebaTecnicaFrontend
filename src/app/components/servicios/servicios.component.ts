import { Component } from '@angular/core';
import { Servicio } from './interfaces/servicio.interface';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent {
  servicios!: Servicio[];

  constructor(private servicioSvc: ServicioService) {}

  ngOnInit() {
    this.getServicios();
  }
  getServicios() {
    this.servicioSvc.getServices().subscribe({
      next: (res: any) => {
        this.servicios = res;
      },
      error: (error) => {},
    });
  }
}
