import {Http, BaseRequestOptions, XHRBackend,} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {MockAdapter} from './adpter';
import contactAPI from './contacts/contacts';
import historyAPI from './history/history';
import loginAPI from './login/login'

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {
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

      if(Mock.onPost('/api/login')){
        connection.mockRespond(loginAPI.login(connection.request));
      }


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
