import { Username } from './../username';
import { Component, OnInit, Input } from '@angular/core';
import { GitsearchService } from './../gitsearch.service';
import { NgForm } from '@angular/forms';
import { Username } from '../username';
 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: any=[];
  User:Username[] =[]

  constructor(private gitsearchService:GitsearchService) {}
    getUser(){
      this.gitsearchService.getData().subscribe((data)=>{
        console.log(data)
        this.user=data
        console.log('this is users array from github')
        console.log(this.user)
        this.searchFilter(this.user)
      })
    }
    searchFilter(user: any){
      
    }
    
    
  

  

  ngOnInit(): void {
  }

}
