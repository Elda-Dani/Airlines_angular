import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  constructor(private api2:ApiService) { 
    this.fetchData1()
  }


fetchData1=()=>{
  this.api2.viewPassengers().subscribe(
    (data)=>{
      this.passengersData=data
    }
  )
}

passengersData:any= {}

  ngOnInit(): void {
  }

}
