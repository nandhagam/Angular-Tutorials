import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  count: number = 10;
  buttonClicked: boolean = false;

  @Output('increaseCount') increaseCount = new EventEmitter<number>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((param) => {
      this.count = param.initialData
    })
  }

  ngOnInit(): void {

  }

  ngAfterContentChecked() {

  }

  onBtnClick = ($event: any) => {
    this.increaseCount.emit(this.count)
    this.buttonClicked = !this.buttonClicked;
    this.router.navigate(['home'], {queryParams:{headerValue: this.count}});
    console.log($event);
  }
}
