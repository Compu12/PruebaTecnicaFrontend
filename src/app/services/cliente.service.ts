import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

   URL = environment.URL +'Cliente';

  constructor(private http: HttpClient) {}

getClients(){
  return this.http.get(this.URL);
}

}
