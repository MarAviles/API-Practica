import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "https://randomuser.me/api";

 

  constructor(private HttpClient: HttpClient) { }

  conseguirUsuario(){
    return this.HttpClient.get(this.url);
  }


}
