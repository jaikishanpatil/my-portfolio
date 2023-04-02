import { Component, OnInit } from '@angular/core';
// declare function scrollHeader():void
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  isShowMenu:boolean=false

  constructor() {
    // scrollHeader();
  }

  ngOnInit(): void {
    window.addEventListener('scroll',this.scrollHeader);
  }
  showMenu(isShowMenu:boolean){
    this.isShowMenu=isShowMenu;
  }
  closeMenu(isShowMenu:boolean){
    this.isShowMenu=isShowMenu;
  }

  scrollHeader(){
      const nav = document.getElementById('header')
      if(window.scrollY>=200){
        nav?.classList.add('scroll-header');
      }else{
        nav?.classList.remove('scroll-header');
      }
  }

}
