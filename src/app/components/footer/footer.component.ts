import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JsonfilereaderService } from 'src/app/services/jsonfilereader.service';
import { SystemConfig } from 'src/app/shared/systemconfig';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  sections: any[] = [];
  socialMedia: any[] = [];
  forms: any[] = [];

  constructor(public footer: JsonfilereaderService) {
    this.email = '';
  }

     ngOnInit(): void {
     this.footer.parseJsonFile(SystemConfig.footerJson).subscribe((data: any) => {
      this.sections = data.sections;
      this.socialMedia = data.socialMedia;
      this.forms = data.forms;
    });
  }
  email: string;


  onSubmit(): void {
    if (this.email) {
      console.log(`Email submitted: ${this.email}`);
      this.email = '';
    }
  }
}
