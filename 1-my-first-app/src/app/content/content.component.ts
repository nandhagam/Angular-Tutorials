import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  count: number = 10;
  buttonClicked: boolean = false;

  @Output('increaseCount') increaseCount = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick() {
    this.increaseCount.emit(this.count)
    this.buttonClicked = !this.buttonClicked;
  }

}
