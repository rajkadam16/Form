import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-nav',
  templateUrl: './nested-nav.component.html',
  styleUrls: ['./nested-nav.component.css']
})
export class NestedNavComponent {
  inview(ele: any) {
    ele.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }
}
