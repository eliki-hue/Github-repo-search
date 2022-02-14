import { User } from './../user';
import { Component, OnInit, Input } from '@angular/core';
import { GitsearchService } from './../gitsearch.service';

 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() received:any=[]
  user: User[]=[]
  newUser= new User('')
  username!: string;

  userInput(data: any){
    const username = data.username;
    alert(username)
    this.updateUsername(username)
  }
  updateUsername(username: any){
    this.gitsearchService.updateSearch(this.username)
  }
  

  constructor(private gitsearchService:GitsearchService) {}
    getUser(){
      this.gitsearchService.getData().subscribe((data)=>{
        console.log(data)
        this.received=data
        console.log('this is users array from github')
        
      })
    }
    
  

  

  ngOnInit(): void {
  }

}
