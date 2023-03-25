import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}
  activeAccordion = 'One'
  todaysDate:any=new Date().toLocaleDateString()
  ngOnInit(): void {
    this.qualificationTabs();
  }

  //Qualifications tabs
  qualificationTabs(){
    const tabs = document.querySelectorAll('[data-target]');
    const tabContents = document.querySelectorAll('[data-content]')

    tabs.forEach((tab: any)=>{
      tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach((tabcontent:any)=>{
          tabcontent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')
        tab.forEach((tab:any)=>{
          tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
      })
    })
  }

  // skills tab
 
  isActive (name: string){
    return this.activeAccordion === name
  }

  setActive(name: string){
    this.activeAccordion = name
  } 
}
