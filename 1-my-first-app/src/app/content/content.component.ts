import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  count: number = 10;
  buttonClicked: boolean = false;

  @Output('increaseCount') increaseCount = new EventEmitter<number>();

  constructor(public cd: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  ngAfterContentChecked() {

  }

  onBtnClick = ($event: any) => {
    if($event.keyCode === 13){
      this.increaseCount.emit(this.count)
      this.buttonClicked = !this.buttonClicked;
      console.log($event);
    } else {
      console.error("Wrong key pressed.")
    }
   
  }
}
