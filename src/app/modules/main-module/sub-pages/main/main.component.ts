import { Component, OnInit } from '@angular/core';

declare function portfolioSwiper():void;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}
  activeAccordion = 'One';
  todaysDate: any = new Date().toLocaleDateString();
  ngOnInit(): void {
    portfolioSwiper();
    this.qualificationTabs();
    this.serviceTab();
  }

  //Qualifications tabs
  qualificationTabs() {
    const tabs = document.querySelectorAll('[data-target]');
    const tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach((tab: any) => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tabcontent: any) => {
          tabcontent.classList.remove('qualification_active');
        });
        target.classList.add('qualification_active');
        // tab?.forEach((tab: any) => {
        //   tab.classList.remove('qualification_active');
        // });
        tab.classList.add('qualification_active');
      });
    });
  }

  // skills tab

  isActive(name: string) {
    return this.activeAccordion === name;
  }

  setActive(name: string) {
    this.activeAccordion = name;
  }

  // services tab
  serviceTab() {
    const modalView = document.querySelectorAll('.services_model');
    const modalBtns = document.querySelectorAll('.services_button');
    const modalClose = document.querySelectorAll('.services_model-close');

    let model = function (modelClick: any) {
      modalView[modelClick].classList.add('active-modal');
    };
    modalBtns.forEach((modalbtn: any, index) => {
      modalbtn.addEventListener('click', () => {
        model(index);
      });
    });
    modalClose.forEach((modelClose: any) => {
      modelClose.addEventListener('click', () => {
        modalView.forEach((modelvies: any) => {
          modelvies.classList.remove('active-modal');
        });
      });
    });
  }

  // Portfolio Swiper
  portfolioSwiper(){
    // let swiper = new Swiper(".portfolio_container", {
    //   cssMode: true,
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },
    //   mousewheel: true,
    //   keyboard: true,
    // });
  } 
}
