import { Component } from '@angular/core';
import { JsonfilereaderService } from 'src/app/services/jsonfilereader.service';
import { SystemConfig } from 'src/app/shared/systemconfig';

@Component({
  selector: 'app-featurette',
  templateUrl: './featurette.component.html',
  styleUrls: ['./featurette.component.css']
})
export class FeaturetteComponent {
  featuretteData: any[] = [];

  constructor(private featurette: JsonfilereaderService) { }

  ngOnInit(): void {
    this.featurette.parseJsonFile(SystemConfig.featuretteJson).subscribe((res: any) => {
      this.featuretteData = res;
    });
  }
}
