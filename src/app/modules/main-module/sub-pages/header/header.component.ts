import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  isShowMenu:boolean=false

  constructor() {}

  ngOnInit(): void {
  }
  showMenu(isShowMenu:boolean){
    this.isShowMenu=isShowMenu;
  }
  closeMenu(isShowMenu:boolean){
    this.isShowMenu=isShowMenu;
  }

}
