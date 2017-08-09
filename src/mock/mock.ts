import {Http, BaseRequestOptions, XHRBackend, RequestOptions,Response} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {MockAdapter} from './adpter';
import contactAPI from './contacts/contacts';
import historyAPI from './history/history';
import loginAPI from './login/login'

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
    backend.connections.subscribe((connection: MockConnection) => {
      let Mock = new MockAdapter(connection);

      if(Mock.onGet('/api/getContacts')) {
        connection.mockRespond(contactAPI.getContacts(connection.request));
      }
      if(Mock.onPost('/api/getContacts')){
        connection.mockRespond(contactAPI.getContacts(connection.request));
      }

      if(Mock.onGet('/api/getApvHistory')){
        connection.mockRespond(historyAPI.getApvHistory(connection.request));
      }

      if(Mock.onPost('/mock/api/login')){
        connection.mockRespond(loginAPI.login(connection.request));
      }

      // pass through any requests not handled above
      let realHttp = new Http(realBackend, options);
      let requestOptions = new RequestOptions({
        method: connection.request.method,
        headers: connection.request.headers,
        body: connection.request.getBody(),
        url: connection.request.url,
        withCredentials: connection.request.withCredentials,
        responseType: connection.request.responseType
      });
      realHttp.request(connection.request.url, requestOptions)
        .subscribe((response: Response) => {
            connection.mockRespond(response);
          },
          (error: any) => {
            connection.mockError(error);
          });


    });

    return new Http(backend, options);
};

export let fakeBackendProvider = [
    {
        provide: Http,
        useFactory: fakeBackendFactory,
        deps: [MockBackend, BaseRequestOptions, XHRBackend]
    },
    MockBackend,
    BaseRequestOptions
];
