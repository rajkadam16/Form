import { Component } from '@angular/core';
import { JsonfilereaderService } from 'src/app/services/jsonfilereader.service';
import { SystemConfig } from 'src/app/shared/systemconfig';

@Component({
  selector: 'app-image-gallary',
  templateUrl: './image-gallary.component.html',
  styleUrls: ['./image-gallary.component.css']
})
export class ImageGallaryComponent {
  imagegallaryData: any[] = [];

  constructor(private imageGallary: JsonfilereaderService) { }

  ngOnInit(): void {
    this.imageGallary.parseJsonFile(SystemConfig.imagegallaryJson).subscribe((res: any) => {
      this.imagegallaryData = res;
    });
  }

  images = [
    { src: 'assets/image1.jpg', alt: 'Image 1' },
    { src: 'assets/image2.jpg', alt: 'Image 2' },
    { src: 'assets/image3.jpg', alt: 'Image 3' }
  ];
}
