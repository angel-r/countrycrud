import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styles: []
})
export class CountriesComponent implements OnInit {
  countries$: Object;
  public newName: string;

  editCountry(c){
    this.data.editCountry(c.id,c.name).subscribe(
      response => {
        this.loadCountries();
      }
    );
    return false;
  }

  deleteCountry(id){
    this.data.deleteCountry(id).subscribe(
      response => {
        this.loadCountries();
      }
    );
  }

  addNew() {    
    this.data.addCountry(this.newName).subscribe(
      response => {
        this.loadCountries();
      }
    );
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
