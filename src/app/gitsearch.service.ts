import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {

  constructor(private http:HttpClient) { }

  getData(){
    const url ="https://api.github.com/users"

    return this.http.get(url)
  }
}
