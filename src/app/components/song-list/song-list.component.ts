import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/models/song';
import { FormControl } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs:Song[];
  songNameControl = new FormControl('')

  length:number = 0;
  pageSize:number = 10;
  pageIndex:number = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  
  constructor(private songService:SongService) { }

  ngOnInit(): void {
  }

  searchSong(){
    this.songService.searchSong(this.songNameControl.value).subscribe(songs =>{
      this.songs = songs['results']
      this.length=this.songs.length
      this.pageIndex = 0
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
