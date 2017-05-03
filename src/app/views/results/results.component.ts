import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common';

import { Observable } from 'rxjs/Observable';

import { VotingService } from './../../service/voting.service';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  providers: [VotingService]
})
export class ResultsComponent {
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;
  public barChartData:any[] = [];
  private voting: any;
  private vote: any;
  private options: any;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartColors:Array<any> = [
    { // everis-green
      backgroundColor: '#d6d6c2',
      borderColor: '#FFF'
    }
  ];

  ngOnInit(){
    var productId = this.route.snapshot.params['id'];
    this.votingService.getAllVotings().subscribe(votings => {
      this.voting = votings;
      for(let entry of this.voting){
        if(entry.id === productId){
          this.vote = entry;
          this.options = entry.options;
          console.log("VOTO ELEGIDO --> " + JSON.stringify(this.vote, null, 4));
          console.log("OPTIONS --> " + JSON.stringify(this.options, null, 4));
        }
      }
      this.extractOptionsData(this.options);
    });
  }

  private extractOptionsData(options: any): any{
    var data: number[] = [];
    for(let option of options){
      data.push(option.number_of_votes);
      this.barChartLabels.push(option.description);
    }
    this.barChartData.push({data: data, label: 'Number of votes'});
  }

  goBack() {
    this.location.back();
  }

  constructor(private route: ActivatedRoute,
              private location: Location,
              private votingService: VotingService,
              private router: Router) {  }

}
