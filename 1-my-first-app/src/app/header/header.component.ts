import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('headercon') contentDOM: ElementRef | undefined;
  @Input('headerTitle') headerTitle = '';

  passedValue = null

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute);
    this.activatedRoute.queryParams.subscribe((data) => {
      // "/counter" or "/home"
      // "/counter?headerValue=45" or "/home?headerValue=54"
      const isHomeURL = this.router.url.indexOf('home') > -1
      if (data.headerValue) {
        this.passedValue = data.headerValue
      }
    })
  }

}
