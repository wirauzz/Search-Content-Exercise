import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/models/song';

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent implements OnInit {
  @Input() song:Song;
  constructor() { }

  ngOnInit(): void {
  }

  convertToMinutes(duration:number){
    let seconds = duration/1000;
    let minutes = seconds/60;
    return Math.floor(minutes);
  }

  convertToSeconds(duration:number){
    let seconds = duration/1000;
    let minutes = seconds%60;
    return Math.floor(minutes);
  }

}
