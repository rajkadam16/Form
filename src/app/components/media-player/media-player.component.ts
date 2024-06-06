import { Component } from '@angular/core';
import { JsonfilereaderService } from 'src/app/services/jsonfilereader.service';
import { SystemConfig } from 'src/app/shared/systemconfig';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  videoData: any;

  constructor(private mediaplayer: JsonfilereaderService) { }

  ngOnInit(): void {
    this.mediaplayer.parseJsonFile(SystemConfig.mediaplayerJson).subscribe((res: any) => {
      this.videoData = res;
    });
  }
}
