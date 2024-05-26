import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css']
})
export class NotificationBarComponent implements OnInit {
  notificationData: any[] = [];

  constructor(private notification: NotificationService) {}

  ngOnInit(): void {
    this.notification.notification().subscribe((res: any) => {
      this.notificationData = res;
    });
  }
}
