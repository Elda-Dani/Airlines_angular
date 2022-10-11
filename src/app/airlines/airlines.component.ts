import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css']
})
export class AirlinesComponent implements OnInit {

  constructor(private api1:ApiService) { 
    this.fetchData()
  }


fetchData=()=>{
  this.api1.viewAirlines().subscribe(
    (data)=>{
      this.airlinesData=data
    }
  )
}

airlinesData:any=[]

  ngOnInit(): void {
  }

}
