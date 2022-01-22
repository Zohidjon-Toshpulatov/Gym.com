import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent implements OnInit {
  @Input() items: any;
  itemProducts: any;
  viewItems: any;

  constructor() { }

  ngOnInit(): void {
    this.viewItems = this.items.fields.products.slice(0, 4)
    this.itemProducts = this.items.fields.products.map((pro: any) => {
      return pro.fields
    })
  }

  viewMore() {
    if (this.viewItems && this.items.fields.products.length > this.viewItems.length) {
      const newItems = this.items.fields.products.slice(this.viewItems.length, this.viewItems.length + 4)
      this.viewItems.push(...newItems)
    }
  }

  isEqual() {
    return this.viewItems?.length === this.itemProducts?.length;
  }
}
