import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { VotingService } from '../../service/voting.service';

@Component({
  selector: 'voting-component',
  templateUrl: './voting.component.html',
  providers: [VotingService]
})
export class VotingComponent implements OnInit{

  private voting: any[];

  constructor(private votingService: VotingService, private router: Router){}

  ngOnInit(): void{
    this.votingService.getAllVotings().subscribe(votings => this.voting = votings);
  }

  goToVote(vote: string):void{
    this.router.navigate(['/voting', vote]);
  }

}
