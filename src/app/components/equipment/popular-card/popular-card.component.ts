import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-card',
  templateUrl: './popular-card.component.html',
  styleUrls: ['./popular-card.component.scss']
})
export class PopularCardComponent implements OnInit {
  @Input() items: any;
  twoItems: any;

  constructor() { }

  ngOnInit(): void {
    this.twoItems = this.items.filter((item: any, i: number) => {
      if (i < 2) {
        return item;
      }
    });
  }

}
