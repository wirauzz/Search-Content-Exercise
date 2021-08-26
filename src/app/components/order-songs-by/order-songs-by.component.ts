import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-order-songs-by',
  templateUrl: './order-songs-by.component.html',
  styleUrls: ['./order-songs-by.component.css']
})
export class OrderSongsByComponent implements OnInit {
  @Output() optionToOrder: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  
  orderByAsc(){
    this.optionToOrder.emit(true);
  }
  
  orderByDesc(){
    this.optionToOrder.emit(false);
  }
}
