import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { JsonfilereaderService } from 'src/app/services/jsonfilereader.service';
import { SystemConfig } from 'src/app/shared/systemconfig';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css'],
})
export class ListGroupComponent {
  // listGroupData: any[] = [];

  // constructor(public listgroup: JsonfilereaderService) {}

  // ngOnInit(): void {
  //   this.listgroup
  //     .parseJsonFile(SystemConfig.listgroupJson)
  //     .subscribe((data: any) => {
  //       this.listGroupData = data;
  //     });
  // }

  // inview(ele: any) {
  //   ele.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  // }
  // activeItem: any = '';

  // onview(item: any): void {
  //   this.activeItem = item;
  // }
  listGroupData: any[] = [];
  activeItem: string = '';

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  constructor(public listgroup: JsonfilereaderService,private http: HttpClient) {}

 ngOnInit(): void {
    this.listgroup
      .parseJsonFile(SystemConfig.listgroupJson)
      .subscribe((data: any) => {
        this.listGroupData = data;
      });
  }

  inview(itemId: string) {
    const element = this.scrollContainer.nativeElement.querySelector(`#${itemId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onview(itemId: string) {
    this.activeItem = itemId;
  }

}
