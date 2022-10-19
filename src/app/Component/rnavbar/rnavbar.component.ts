import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rnavbar',
  templateUrl: './rnavbar.component.html',
  styleUrls: ['./rnavbar.component.scss']
})
export class RnavbarComponent implements OnInit {
  status : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  clickNav(){
    this.status=!this.status
  }

}
