import { Component, ElementRef, ViewChild, AfterViewInit, Renderer2, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('headercon') contentDOM: ElementRef | undefined;
  @Input('headerTitle') headerTitle = '';

  constructor() {

  }

}
