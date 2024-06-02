import { Component, inject, OnInit } from '@angular/core';
import { JsonfilereaderService } from 'src/app/services/jsonfilereader.service';
import { SystemConfig } from 'src/app/shared/systemconfig';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent implements OnInit {
  logo: any = {};
  menuItems: any[] = [];
  buttonMenuItems: any[] = [];
  dropDownMenuItems: any[] = [];

  constructor(private menuBar: JsonfilereaderService, private router: Router) { }

  ngOnInit(): void {
    this.menuBar.parseJsonFile(SystemConfig.navigatorJson).subscribe((res: any) => {
      this.logo = res.logo;
      this.menuItems = res.menuItems;
      this.buttonMenuItems = res.buttonMenuItems;
      this.dropDownMenuItems = res.dropDownMenuItems;
    });
  }

  naviagte(navigatTo: string) {
    this.router.navigate([navigatTo]);
  }

}
