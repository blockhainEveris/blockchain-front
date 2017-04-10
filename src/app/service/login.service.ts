import { Injectable } from '@angular/core';

const USERS: string[] = ["dlaradie", "aragorn", "wilfred"];

@Injectable()
export class LoginService {

  getLogerResult(name: string): boolean{
    if(USERS.indexOf(name) != -1){
      return true;
    }else{
      return false;
    }
  }

}
