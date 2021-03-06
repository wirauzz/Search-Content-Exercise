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

  currentPage:number;
  pageSize:number;
  length:number = 1;

  constructor(private songService:SongService) { }

  ngOnInit(): void {
  }

  searchSong(){
    this.songService.searchSong(this.songNameControl.value).subscribe(songs =>{
      this.songs = songs['results']
      this.currentPage = 1;
      this.pageSize = 10;
      this.length = this.songs.length

    })
  }

  numberOfPages() {
    return Math.ceil(this.length / this.pageSize);
  }

  orderSong(option: boolean){
    if(option== true)
    {
      this.songs.sort((a,b) => a.trackName.localeCompare(b.trackName));
    }
    else if(option== false)
    {
      this.songs.sort((b,a) => a.trackName.localeCompare(b.trackName));
    }
  }
 
}
