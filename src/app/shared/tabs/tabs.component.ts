import { Component, OnInit, OnChanges } from '@angular/core';
import { TabsDataService } from '../../services/tabs-data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnChanges , OnInit{

  constructor(private _tabsdata: TabsDataService) { }

  cases: string = '';
  deaths: string = '';
  recovery: string = '';
  ngOnInit(): void {
  	this._tabsdata.tabsCoronaData().subscribe(
      coronaData => {
        this.deaths = coronaData.data.summary.deaths
        this.cases = coronaData.data.summary.total
        this.recovery = coronaData.data.summary.discharged
      }
    )
  }

  ngOnChanges(): void {
  }



}
