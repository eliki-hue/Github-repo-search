import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {

  constructor(private http:HttpClient) { }

   private searchName = 'jessicamwangi'
  getData(){
    let url ="https://api.github.com/users/"+this.searchName+"/repos"
    alert(url)

    return this.http.get(url)
  }
  updateSearch(username:string){
    this.searchName = username;
  }
}
