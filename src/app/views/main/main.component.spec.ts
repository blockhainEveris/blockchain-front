import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http, BaseRequestOptions, Response, ResponseOptions, XHRBackend } from '@angular/http';

import { MainComponent } from './main.component';

import { Thin2Config, ConfigService, ConfigLoader } from 'thin2-config';
import { LoggerModule } from 'thin2-log';
import { Thin2RouterService } from 'thin2-router';

describe('MainComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [Thin2Config, LoggerModule],
            declarations: [MainComponent],
            providers: [
              // Add a custom Http object with a backend that doesn't generate real Http requests
              {
                provide: XHRBackend,
                useClass: MockBackend
              }
            ]
          });
    });

    beforeEach(inject([XHRBackend], (mockBackend: MockBackend) => {
      expect(mockBackend).toBeDefined();


      let mockResponse = {
        "nova": {
          "thin2": {
            "cfg": "configuration",
            "port": "15000",
            "application": {
              "name": "thin2-demo",
              "company": "BBVA",
              "date": "30/11/2016"
            },
            "auth": {
              "authEndpoint": "authMock.json",
              "timeout": "5000",
              "uuaa": "test"
            }
          }
        }
      };

      mockBackend.connections.subscribe((connection: MockConnection) => {
        let options = new ResponseOptions({
          body: JSON.stringify(mockResponse)
        });
        connection.mockRespond(new Response(options));
      });
    }));

    it('should work', () => {
        let fixture = TestBed.createComponent(MainComponent);
        expect(fixture.componentInstance instanceof MainComponent).toBe(true, 'should create MainComponent');
        console.info('should work');
    });

});
