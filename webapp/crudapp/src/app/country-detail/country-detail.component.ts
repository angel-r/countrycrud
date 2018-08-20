import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  countryId$: number;
  country$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.countryId$ = params.id);
  }

  ngOnInit() {
    this.data.getCountry(this.countryId$).subscribe(
      resp => {
        this.country$ = resp;        
      }
    );
  }

}
