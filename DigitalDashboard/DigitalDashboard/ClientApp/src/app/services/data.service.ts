import { Component, Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
  public my_url: string = "";
  constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string)
  {
    this.my_url = baseUrl;
  }
}

