import { Component, Input, OnInit } from '@angular/core';
import { Entry } from 'contentful';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() products: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.products)
  }

}
