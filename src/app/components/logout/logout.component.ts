import { Component } from '@angular/core';
import { JsonfilereaderService } from 'src/app/services/jsonfilereader.service';
import { SystemConfig } from 'src/app/shared/systemconfig';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  logoutData: any[] = [];

  constructor(private logout: JsonfilereaderService) { }

  ngOnInit(): void {
    this.logout.parseJsonFile(SystemConfig.logoutJson).subscribe((res: any) => {
      this.logoutData = res;
    });
  }
}
