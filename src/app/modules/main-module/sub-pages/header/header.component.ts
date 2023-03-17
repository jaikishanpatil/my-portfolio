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
    window.addEventListener('scroll',this.isScrolling)
  }

  isScrolling=()=>{
    const headerel=document.querySelector('.primary-header')
    let windowpos=window.scrollY>20;
    headerel?.classList.toggle('active',windowpos)
  }
  clickMe() {
    this.path = this.router.url;
    this.router.navigate([`test`]);
  }
}
