import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(private http: HttpClient) { }
  getProfile(item){
    return this.http.post("http://localhost:3000/signup/add",{'signup':item}).subscribe((data)=>
    {
      console.log(data);
    })
  }
}
