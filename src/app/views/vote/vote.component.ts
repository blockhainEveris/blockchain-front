import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router'
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
  private options: any;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private votingService: VotingService,
              private router: Router) {  }

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
    });

  }

  goBack() {
    this.location.back();
  }

  goResults(id: string){
    console.log("Voy a la votacion " + id);
    this.router.navigate(['/results', id]);
  }

}
