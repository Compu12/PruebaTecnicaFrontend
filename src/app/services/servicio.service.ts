import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  URL = environment.URL + 'Servicio';

  constructor(private http: HttpClient) {}

  getServices() {
    return this.http.get(this.URL);
  }
}
