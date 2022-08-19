import { Component, OnInit } from '@angular/core';
import { CoronaDataService } from '../../services/corona-data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})


export class DataTableComponent implements OnInit {


  coronadata:any = []
  constructor(private _coronadate : CoronaDataService) {
   }
  
  ngOnInit(): void {
  	this._coronadate.datatable().subscribe(
  		(coronaData: any) => {
        this.coronadata = coronaData.data.regional;
        // console.log(this.coronadata[0].loc)
      }
  	)
  }

  

}
