import {Input, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges, OnInit, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  @Input('headerTitle') myHeaderTitle : string = 'Hello';


  constructor() { }

  ngOnChanges() {
    console.log("On Change Called")
  }

  ngOnInit() {
    console.log("On Init Called.")
    sessionStorage.setItem("prithivi", "Developer")
  }

  ngDoCheck() {
    console.log("Do check Called.")
  }

  ngAfterContentInit() {
    console.log("After Content Init..")
  }

  ngAfterContentChecked() {
    console.log("After Content Checked")
  }

  ngAfterViewInit() {
    console.log("After view init...")
  }

  ngAfterViewChecked() {
    console.log("After View Checked")
  }


  ngOnDestroy() {
    console.log("On header Destroy Called.")
    sessionStorage.removeItem("prithivi");
  }

}
