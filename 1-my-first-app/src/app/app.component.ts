import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<div>{{title}}</div>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  title = 'my-first-app';

  headerTitle = "Welcome Prithivi";

  ngOnChanges() {
    console.log("On Change Called")
  }

  ngAfterViewInit() {
    console.log("After view init...")
  }

  ngAfterViewChecked() {
    console.log("After View Checked")
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

 
  ngOnDestroy() {
    console.log("On Destroy Called.")
    sessionStorage.removeItem("prithivi");
  }


  clickMe() {
    this.title = "Prithivi's Angular Class"
  }
}