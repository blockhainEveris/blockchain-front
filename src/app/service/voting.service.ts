import { Injectable } from '@angular/core';
import { Headers, Http, Response  } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class VotingService {

  private votingUrl = "https://blockchain-middleware-everis.herokuapp.com/api/v1/apps/blockchain/query";
  private resp: any;

  constructor(private http: Http) { }

  getAllVotings(): Observable<any[]>{
    console.log("Hago la llamada");
    return this.http.get(this.votingUrl)
                    .map(this.extractDataForVotings)
                    .catch(this.handleError);
  }

  private extractDataForVotings(res: Response) {
    let body = res.json();
    console.log("extraemos datos " + JSON.stringify(body, null, 4));
    return body.votings || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
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

}
