import { User } from './../user';
import { Component, OnInit, Input } from '@angular/core';
import { GitsearchService } from './../gitsearch.service';

 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() received:any=[];
  user: User[]=[]
  newUser= new User('')
  username!: string;

  userInput(data: any){
    const username = data.username;
   
    this.updateUsername(username)
  }
  updateUsername(username: any){
    
    let nam =username;
    this.gitsearchService.updateSearch(nam)
    this.getUser()
    
  }

  constructor(private gitsearchService:GitsearchService) {}
  getUser(){
    this.gitsearchService.getData().subscribe((data)=>{

      this.received=data
      console.log('this is users array from github')
      console.log(data)
    })
  }
    
    
  

  

  ngOnInit(): void {
  }

}
