import { TokenizeResult } from '@angular/compiler/src/ml_parser/lexer';
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
  popularItems: any;
  dumbells: any;
  barbells: any;
  stationaryBike: any;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getProducts().then(items => {
      this.dumbells = items.filter((item: any) => item.fields.name === 'Dumbbells')[0];
      this.barbells = items.filter((item: any) => item.fields.name === 'Barbell')[0];
      this.stationaryBike = items.filter((item: any) => item.fields.name === 'Stationary Bike')[0];
      this.equipments = items.filter(item => item.sys.contentType.sys.id === 'equipment');
      this.popularItems = this.equipments.filter(item => item.fields.isPopular === true).slice(0, 4);
    });
  }

}
