import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ConfigStore } from 'thin2-config';
import { Thin2Log } from 'thin2-log';

@Component({
    selector: 'thin2-app',
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

    constructor(
        private store: ConfigStore,
        private log: Thin2Log
    ) { }

    ngOnInit() {
        // write an example error message
        this.log.error('Welcome to the Thin2 application template.');
    }

}
