import { Component, inject, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent implements OnInit{
  navbarData: any[] = [];

  constructor(private menuBar: NavbarService) {}

  ngOnInit(): void {
    this.menuBar.getNavBar().subscribe((res: any) => {
      this.navbarData = res;
    });
  }

}
