import { Component, OnInit } from '@angular/core';
import { JsonfilereaderService } from 'src/app/services/jsonfilereader.service';
import { SystemConfig } from 'src/app/shared/systemconfig';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albumData: any[] = [];

  constructor(public album: JsonfilereaderService) { }

  ngOnInit(): void {
    this.album.parseJsonFile(SystemConfig.albumJson).subscribe((res: any) => {
      this.albumData = res;
    });
  }

}
