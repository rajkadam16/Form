import { Component, OnInit } from '@angular/core';
import { JsonfilereaderService } from 'src/app/services/jsonfilereader.service';
import { SystemConfig } from 'src/app/shared/systemconfig';
@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css']
})
export class NotificationBarComponent implements OnInit {
  notificationData: any[] = [];

  constructor(private notification: JsonfilereaderService) {}

  ngOnInit(): void {
    this.notification.parseJsonFile(SystemConfig.notificationJson).subscribe((res: any) => {
      this.notificationData = res;
    });
  }
}
