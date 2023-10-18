import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// declare function darkLightTheme():void
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() headerData:any = {}
  @Input() activeNav:string = 'home';
  isShowMenu:boolean=false

  constructor(private readonly router :Router) {
    
  }

  ngOnInit(): void {
    let url=this.router.url.slice(2);
    if(url){
      this.activeNav = this.router.url.slice(2);
    }
    this.darkLightTheme();
    window.addEventListener('scroll',this.scrollHeader);
  }
  showMenu(isShowMenu:boolean){
    this.isShowMenu=isShowMenu;
  }
  closeMenu(isShowMenu:boolean , activenav?:string){
    this.isShowMenu=isShowMenu;
    this.activeNav = activenav || '';
  }

  scrollHeader(){
      const nav = document.getElementById('header')
      if(window.scrollY>=200){
        nav?.classList.add('scroll-header');
      }else{
        nav?.classList.remove('scroll-header');
      }
  }

  darkLightTheme() {
    const themeButton = document.getElementById('theame-button')
    const darktheme = 'dark-theme'
    const iconTheme = 'uil-sun'
  
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')
  
    const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton?.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'
  
    if (selectedTheme && themeButton !== null) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darktheme)
      themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
    }
  
    if(themeButton){
      themeButton.addEventListener('click', ()=>{
        document.body.classList.toggle(darktheme)
        themeButton.classList.toggle(iconTheme)
        localStorage.setItem('selected-theme' , getCurrentTheme())
        localStorage.setItem('selected-icon' , getCurrentIcon())
      })
    }
  }

  ngOnDestroy(): void {
    localStorage.clear();
  }

}
