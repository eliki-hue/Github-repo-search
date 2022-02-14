import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {


  constructor(private http:HttpClient) { }

   private searchName = ''
   updateSearch(username:string){
    this.searchName = username;
    
    this.getData()
  }
  
  getData(){
    let url ="https://api.github.com/users/"+this.searchName+"/repos"
    

    return this.http.get(url)
  }
  
}
