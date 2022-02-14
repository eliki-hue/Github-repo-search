import { Component, OnInit, Input } from '@angular/core';
import { GitsearchService } from './../gitsearch.service';
import { NgForm } from '@angular/forms';
import { Repository } from '../repository';
import { User } from '../user';
 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username = new User('')
 userInput(value: any){
   const username = value.userName
   alert(username)

 }


  @Input() user: any=[];
  results =new Repository('','',new Date)
  

  constructor(private gitsearchService:GitsearchService) {}
    getUser(){
      this.gitsearchService.getData().subscribe((data)=>{
        console.log(data)
        this.user=data
        console.log('this is users array from github')
        console.log(this.user)
        this.searchFilter(data)
      })
    }
    searchFilter(data: any){
      this.results.repoName =data.name;
      this.results.description =data.description;
      this.results.dateCreated= data.updated_at;
      
      this.user.push(this.results)
    }
    
    
  

  

  ngOnInit(): void {
  }

}
