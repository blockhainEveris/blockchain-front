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
  private emitVote: any;
  private productId: any;
  private selected: any;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private votingService: VotingService,
    private router: Router) {
      this.emitVote = {
        "justification": "Justificacion", // HECHO
        "optionId": 2, //Medio Hecho
        "voter": {
          "category": "SN", // HECHO
          "channel": "Webapp", // HECHO
          "id": "5", // HECHO
          "name": "dlaradie", // HECHO
          "office": "MAD" // HECHO
        },
        "votingId": 1412366217 // HECHO
      }
    }

      ngOnInit(){
        this.productId = this.route.snapshot.params['id'];
        this.votingService.getAllVotings().subscribe(votings => {
          this.voting = votings;
          for(let entry of this.voting){
            if(entry.id === this.productId){
              this.vote = entry;
              this.options = entry.options;
            }
          }
        });

      }

      goBack() {
        this.location.back();
      }

      goResults(id: string){
        this.router.navigate(['/results', id]);
      }

      voteOption(){
        this.emitVote.votingId = this.productId;
        this.emitVote.voter.name = localStorage.getItem("userName");
        this.emitVote.voter.id = Math.floor( Math.random() * 1000 );
        this.emitVote.optionId = this.selected.id;
        this.votingService.vote(this.emitVote).subscribe(response => {
          console.log("EL RESULTADO DE PUT ES " + JSON.stringify(response, null, 4))
        });
      }

      optionSelected(option): void{
        this.selected = option;
      }

    }
