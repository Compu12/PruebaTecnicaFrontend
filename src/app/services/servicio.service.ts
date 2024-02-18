import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Servicio } from '../components/servicios/interfaces/servicio.interface';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  URL = environment.URL + 'Servicio';

  constructor(private http: HttpClient) {}

  getServices() {
    return this.http.get(this.URL);
  }
  editServices(servicio: Servicio) {
    return this.http.put(this.URL, servicio);
  }
  createServices(servicio: Servicio) {
    return this.http.post(this.URL, servicio);
  }
  deleteServices(idServicio: number) {
    return this.http.delete(this.URL + '/' + idServicio);
  }
}
