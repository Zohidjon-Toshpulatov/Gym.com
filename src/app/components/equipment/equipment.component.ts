import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/shared/contentful.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  equipments: Entry<any>[] = [];
  products: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getProducts().then(items => {
      items.forEach(item => console.log(item.sys.contentType.sys.id));
      this.equipments = items.filter(item => item.sys.contentType.sys.id === 'equipment');
      this.products = items.filter(item => item.sys.contentType.sys.id === 'productCollection');
      this.products.filter(product => { product.fields?.products ? console.log(product.fields.products[0].fields) : null })
    });
  }

}
