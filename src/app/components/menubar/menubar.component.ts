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
  navbar1Data: any[] = [];
  navbar2Data: any[] = [];
  navbar3Data: any[] = [];

  constructor(private menuBar: JsonfilereaderService, private router: Router) { }

  ngOnInit(): void {
    this.menuBar.parseJsonFile(SystemConfig.navigatorJson).subscribe((res: any) => {
      this.navbar1Data = res.menu1;
      this.navbar2Data = res.menu2;
      this.navbar3Data = res.profileImg;
    });
  }

  naviagte(navigatTo: string) {
    this.router.navigate([navigatTo]);
  }

}
