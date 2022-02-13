import { GitsearchService } from './../gitsearch.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  user!: string[];

 
  

 
  constructor(private gitsearchService:GitsearchService) {}
    getUser(){
      this.gitsearchService.getData().subscribe((data)=>{
        console.log(data)
      })
    }
  

  ngOnInit(): void {
  }

}


