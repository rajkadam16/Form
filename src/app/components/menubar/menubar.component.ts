import { Component, inject, OnInit } from '@angular/core';
import { JsonfilereaderService } from 'src/app/services/jsonfilereader.service';
import { SystemConfig } from 'src/app/shared/systemconfig';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent implements OnInit{
  navbarData: any[] = [];

  constructor(private menuBar: JsonfilereaderService) {}

  ngOnInit(): void {
    this.menuBar.parseJsonFile(SystemConfig.navigatorJson).subscribe((res: any) => {
      this.navbarData = res;
    });
  }

}
