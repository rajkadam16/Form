import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JsonfilereaderService } from 'src/app/services/jsonfilereader.service';
import { SystemConfig } from 'src/app/shared/systemconfig';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css'],
})
export class ListGroupComponent {
  listGroupData: any[] = [];

  constructor(public listgroup: JsonfilereaderService) {}

  ngOnInit(): void {
    this.listgroup
      .parseJsonFile(SystemConfig.listgroupJson)
      .subscribe((data: any) => {
        this.listGroupData = data.itemName;
      });
  }

  inview(ele: any) {
    ele.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }
  activeItem: string = '';

  onview(item: string): void {
    this.activeItem = item;
  }

}
