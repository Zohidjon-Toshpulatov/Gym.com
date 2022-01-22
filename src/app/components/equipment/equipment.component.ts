import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/shared/contentful.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  popularEquipments: any;
  productCategory: any;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getProducts().then(items => {
      this.productCategory = items.filter((item: any) => {
        if (item?.fields.products) {
          return item.fields
        }
      })
      this.popularEquipments = items
        .filter((item: any) => {
          if (item.sys.contentType.sys.id === 'equipment' && item.fields?.isPopular) {
            return item;
          }
        })
        .map((item: any) => { return item.fields })
        .slice(0, 4);


    });
  }

}
