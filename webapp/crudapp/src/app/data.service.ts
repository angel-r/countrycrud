import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string
  
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:56915/api";
  }

  getCountries() {
    return this.http.get(this.baseUrl + "/country");
  }

  getCountry(id:number) {
    return this.http.get(this.baseUrl + "/country/" + id);
  }

  addCountry(name:string) {
    return this.http.post(this.baseUrl + "/country", {
      "id": 0,
      "name": name
    });
  }

  deleteCountry(id) {
    return this.http.delete(this.baseUrl + "/country/"+id);
  }

  editCountry(id:number,name:string) {
    return this.http.put(this.baseUrl + "/country", {
      id: id,
      name: name
    });
  }



}
