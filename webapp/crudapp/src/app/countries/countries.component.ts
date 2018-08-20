import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Observable } from 'rxjs';

class Country{
  id:number;
  name:string;
}

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styles: []
})
export class CountriesComponent implements OnInit {
  countries$: Object;
  newName: string;
  
  editCountry(c:Country){
    this.data.editCountry(c.id,c.name).subscribe(
      response => {

        this.loadCountries();
      }
    );
    return false;
  }

  deleteCountry(id:number){
    this.data.deleteCountry(id).subscribe(
      response => {
        this.loadCountries();
      }
    );
  }

  addNew() {    
    if (this.newName) {
      this.data.addCountry(this.newName).subscribe(
        response => {
          this.loadCountries();
        }
      );
    }
   
    return false;
  }

  loadCountries(){
    this.data.getCountries().subscribe(
      response => this.countries$ = response
    );
  }

  constructor(private data: DataService) { }


  ngOnInit() {
    this.loadCountries();
  }

}
