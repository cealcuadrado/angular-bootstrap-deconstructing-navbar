import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  isMenuCollapsed: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isMenuCollapsed = true;
  }

  toggleCollapse(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

}
