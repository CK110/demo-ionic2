import {Http, BaseRequestOptions, XHRBackend, RequestOptions,Response} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {MockAdapter} from './adpter';
import contactAPI from './contacts/contacts';
import historyAPI from './history/history';
import loginAPI from './login/login';
import errandAPI from './errand/errand'
import selectPersonAPI from './common/select-person/select-person';
import {AirAppAPI} from "./air-app/air-app";
import {AtmErrandAPI} from "./atm-errand/atm-errand";
import {TodoAPI} from "./todo/todo";

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
    backend.connections.subscribe((connection: MockConnection) => {
      let Mock = new MockAdapter(connection);

      if(Mock.onGet('/mock/api/getContacts')) {
        connection.mockRespond(contactAPI.getContacts(connection.request));
      }
      if(Mock.onPost('/mock/api/getContacts')){
        connection.mockRespond(contactAPI.getContacts(connection.request));
      }

      if(Mock.onGet('/mock/api/getApvHistory')){
        connection.mockRespond(historyAPI.getApvHistory(connection.request));
      }

      if(Mock.onPost('/mock/api/login')){
        connection.mockRespond(loginAPI.login(connection.request));
      }

      if(Mock.onPost('/mock/oa/attend/errand/submitApp')){
        connection.mockRespond(errandAPI.addSubmit(connection.request));
      }

      if(Mock.onPost('/mock/oa/routine/air/addBookApp')){
        connection.mockRespond(errandAPI.addSubmit(connection.request));
      }


      if(Mock.onPost('/mock/common/selectPerson')){
        connection.mockRespond(selectPersonAPI.getUserList(connection.request));
      }

      if(Mock.onPost('/mock/oa/routine/air/queryAirApp')){
        connection.mockRespond(AirAppAPI.getUserList(connection.request));
      }
      if(Mock.onPost('/mock/oa/routine/air/addBookApp')){
        connection.mockRespond(AirAppAPI.addSubmit(connection.request));
      }

      if(Mock.onPost('/mock/oa/routine/air/batchInit')){
        connection.mockRespond(AirAppAPI.ApproveBatchInit(connection.request));
      }
      if(Mock.onPost('/oa/routine/air/initApv')){
        connection.mockRespond(AtmErrandAPI.approveInit(connection.request));
      }

      if(Mock.onPost('/mock/oa/attend/errand/queryApp')){
        connection.mockRespond(errandAPI.getErrandList(connection.request));
      }

      if(Mock.onPost('/mock/oa/attend/errand/queryInit')){
        connection.mockRespond(errandAPI.getInit(connection.request));
      }

      if(Mock.onPost('/mock/oa/attend/errand/queryCurrent')){
        connection.mockRespond(errandAPI.getCurrent(connection.request));
      }

      if(Mock.onPost('/mock/oa/attend/errand/viewApp')){
        connection.mockRespond(errandAPI.viewInit(connection.request));
      }


      if(Mock.onPost('/mock/oa/attend/errand/apvSubmit')){
        connection.mockRespond(errandAPI.batchSubmit(connection.request));
      }

      if(Mock.onPost('/mock/oa/attend/atmerrand/batchInit')){
        connection.mockRespond(AtmErrandAPI.ApproveBatchInit(connection.request));
      }

      if(Mock.onPost('/mock/oa/attend/atmerrand/initApv')){
        connection.mockRespond(AtmErrandAPI.approveInit(connection.request));
      }



      //TDDO
      if(Mock.onPost('/mock/app/todo/queryTask')){
        connection.mockRespond(TodoAPI.getList(connection.request));
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
