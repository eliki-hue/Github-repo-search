import { Component, OnInit, Input } from '@angular/core';
import { GitsearchService } from './../gitsearch.service';

 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user!: string[];

  constructor(private gitsearchService:GitsearchService) {}
    getUser(){
      this.gitsearchService.getData().subscribe((data)=>{
        console.log(data)
      })
    }
  

  

  ngOnInit(): void {
  }

}
