import { Component } from '@angular/core';
import { JsonfilereaderService } from 'src/app/services/jsonfilereader.service';
import { SystemConfig } from 'src/app/shared/systemconfig';

@Component({
  selector: 'app-image-gallary',
  templateUrl: './image-gallary.component.html',
  styleUrls: ['./image-gallary.component.css']
})
export class ImageGallaryComponent {
  carousel: any[] = [];
  button: any[] = [];

  constructor(private imageGallary: JsonfilereaderService) { }

  ngOnInit(): void {
    this.imageGallary.parseJsonFile(SystemConfig.imagegallaryJson).subscribe((res: any) => {
      this.carousel = res.carousel;
      this.button = res.button;
    });
  }

}
