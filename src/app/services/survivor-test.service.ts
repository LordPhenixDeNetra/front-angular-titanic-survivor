import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SurvivorTestService {

  constructor(private httpClient : HttpClient) { }

  url = "http://127.0.0.1:5000/survie";

  survivor(pclass : number, sex : number, age : number):Observable<any>{
    return this.httpClient.get(this.url + '/' + pclass + '/' + sex + '/' + age)
  }
}
