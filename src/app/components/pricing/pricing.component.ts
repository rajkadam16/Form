import { Component, OnInit } from '@angular/core';
import { JsonfilereaderService } from 'src/app/services/jsonfilereader.service';
import { SystemConfig } from 'src/app/shared/systemconfig';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  pricingData: any[] = [];
  controls: any;

  constructor(public pricing: JsonfilereaderService) { }

  ngOnInit(): void {
    this.pricing.parseJsonFile(SystemConfig.pricingJson).subscribe((res: any) => {
      this.pricingData = res;
    });
  }
}
