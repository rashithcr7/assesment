import { Component, OnInit } from '@angular/core';
// declare var jQuery ;
declare var Swiper : any ;
@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.scss']
})
export class ScrollerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    });
  }
  
}
