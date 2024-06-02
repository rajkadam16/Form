import { Component } from '@angular/core';
import { JsonfilereaderService } from 'src/app/services/jsonfilereader.service';
import { SystemConfig } from 'src/app/shared/systemconfig';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileData: any[] = [];
  formInfoData: any[] = [];
  buttonData: any[] = [];

  constructor(public profile: JsonfilereaderService) { }

  ngOnInit(): void {
    this.profile.parseJsonFile(SystemConfig.profileJson).subscribe((res: any) => {
      this.profileData = res.profile;
      this.formInfoData = res.formInfo;
      this.buttonData = res.button;
    });
  }
}