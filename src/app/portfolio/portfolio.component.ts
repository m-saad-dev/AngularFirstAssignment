import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  modalIsShown: boolean = false;
  modalImage: string = "";
  items:Item[] = 
  [
    {
      imgPath: "./assets/images/poert1.png",
    },
    {
      imgPath: "./assets/images/port2.png",
    },
    {
      imgPath: "./assets/images/port3.png",
    },
    {
      imgPath: "./assets/images/poert1.png",
    },
    {
      imgPath: "./assets/images/port2.png",
    },
    {
      imgPath: "./assets/images/port3.png",
    },
  ];

  showModal(img:string) : void
  {
    this.modalIsShown = true;
    this.modalImage = img;
  }
  hideModal(event:MouseEvent){
    this.modalIsShown = false;
    this.modalImage = "";
  }
}
interface Item{
  imgPath:string;
}