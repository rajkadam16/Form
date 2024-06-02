import { Component, OnInit } from '@angular/core';
import { JsonfilereaderService } from 'src/app/services/jsonfilereader.service';
import { SystemConfig } from 'src/app/shared/systemconfig';
@Component({
  selector: 'app-common-faq',
  templateUrl: './common-faq.component.html',
  styleUrls: ['./common-faq.component.css']
})
export class CommonFaqComponent implements OnInit {
  faqData: any[] = [];

  constructor(public faq: JsonfilereaderService) { }

  ngOnInit(): void {
    this.faq.parseJsonFile(SystemConfig.faqJson).subscribe((res: any) => {
      this.faqData = res;
    });
  }
  togglePanel(panel: any) {
    panel.isOpen = !panel.isOpen;
  }
}
