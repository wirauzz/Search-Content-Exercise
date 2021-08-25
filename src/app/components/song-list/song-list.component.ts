import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/models/song';
import { FormControl } from '@angular/forms';
import { pairs } from 'rxjs';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs:Song[];
  songNameControl = new FormControl('')
  
  constructor(private songService:SongService) { }

  ngOnInit(): void {
  }

  searchSong(){
    this.songService.searchSong(this.songNameControl.value).subscribe(songs =>{
      this.songs = songs.results
    })
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
