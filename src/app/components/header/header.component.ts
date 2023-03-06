import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  path: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.path = this.router.url;
  }

  clickMe() {
    this.path = this.router.url;
    this.router.navigate([`main`]);
  }
}
