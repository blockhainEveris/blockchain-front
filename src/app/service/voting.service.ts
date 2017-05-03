import { Injectable } from '@angular/core';
import { Headers, Http, Response  } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class VotingService {

  private votingUrl = "https://blockchain-middleware-everis.herokuapp.com/api/v1/apps/blockchain/query";
  private voteURL = "https://blockchain-middleware-everis.herokuapp.com/api/v1/apps/blockchain/vote"

  constructor(private http: Http) { }

  getAllVotings(): Observable<any[]>{
    return this.http.get(this.votingUrl)
                    .map(this.extractDataForVotings)
                    .catch(this.handleError);
  }

  private extractDataForVotings(res: Response) {
    let body = res.json();
    return body.votings || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  vote(vote: any): Observable<any[]>{
    console.log("VOTO " + JSON.stringify(vote));
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
             .put(this.voteURL, JSON.stringify(vote))
             .map(res => res.json());
  }

}
