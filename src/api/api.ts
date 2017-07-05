import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class APIService {
    constructor(private http: Http){

    }

    getContracts(){
        this.http.get('').subscribe((res) => {
            return res;
        });
    }
}