import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';

import { Observable } from 'rxjs/Observable';

import { VotingService } from './../../service/voting.service';

@Component({
  selector: "vote-component",
  templateUrl: "./vote.component.html",
  providers: [VotingService]
})
export class VoteComponent implements OnInit{

  private voting: any;
  private vote: any;

  constructor(private route: ActivatedRoute, private location: Location, private votingService: VotingService){}

  ngOnInit(){
    var productId = this.route.snapshot.params['id'];
    this.votingService.getAllVotings().subscribe(votings => this.voting = votings);
  }

  goBack() {
    this.location.back();
  }

}
