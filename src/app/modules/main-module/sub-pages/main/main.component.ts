import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FORM_MODEL } from '../model/form-base.enum';
import { MainService } from '../../main.service';
import { AlertService } from 'src/app/shared/modules/alerts/alert.service';

declare function portfolioSwiper(): void;
declare function testimonialSwiper(): void;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(
    private readonly formbuilder: FormBuilder, 
    private readonly _mainService : MainService,
    private readonly _alertService: AlertService
    ) {}
  // var for data
  headerData:any 
  mainData:any
  activeNav:string= ''
  //Form content
  form_models = FORM_MODEL;
  myForm: FormGroup | any;
  submitted: boolean = false;
  serviceIndex:any
  activeTab:string = 'education';

  get name() {
    return this.myForm.controls[FORM_MODEL.NAME];
  }
//
  get email() {
    return this.myForm.controls[FORM_MODEL.EMAIL];
  }
  get project() {
    return this.myForm.controls[FORM_MODEL.PROJECT];
  }
  get message() {
    return this, this.myForm.controls[FORM_MODEL.MESSAGE];
  }

  activeAccordion = 'One';
  todaysDate: any = new Date().toLocaleDateString();

  ngOnInit(): void {
    this.getClientData();
    window.addEventListener('scroll',this.showScroll);
    this.initilizeForm();
    portfolioSwiper();
    testimonialSwiper();
    this.qualificationTabs();
    // this.serviceTab();
  }

  getClientData(){
    this._mainService.getClientData().subscribe(data=>{
      if(data){
        this.mainData=data.main
        this.headerData=data.header
      }
    })
  }

  initilizeForm() {
    this.myForm = this.formbuilder.group({
      name: [
        '',
        {
          validators:[Validators.required, Validators.minLength(3),  Validators.maxLength(20)],
        }
      ],
      email: ['',
      {
        validators:[Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)],
      }
    ],
      project: ['', Validators.nullValidator],
      message: ['', Validators.nullValidator],
    });
  }
  //Qualifications tabs
  qualificationTabs() {
    const tabs = document.querySelectorAll('[data-target]');
    const tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach((tab: any) => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        this.activeTab = target.id;
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
  // serviceTab() {
  //   const modalView = document.querySelectorAll('.services_model');
  //   const modalBtns = document.querySelectorAll('.services_button');
  //   const modalClose = document.querySelectorAll('.services_model-close');

  //   let model = function (modelClick: any) {
  //     modalView[modelClick].classList.add('active-modal');
  //   };
  //   modalBtns.forEach((modalbtn: any, index) => {
  //     modalbtn.addEventListener('click', () => {
  //       model(index);
  //     });
  //   });
  //   modalClose.forEach((modelClose: any) => {
  //     modelClose.addEventListener('click', () => {
  //       modalView.forEach((modelvies: any) => {
  //         modelvies.classList.remove('active-modal');
  //       });
  //     });
  //   });
  // }

  submitForm() {
    if (this.myForm.valid) {
      this._alertService.info("Functionality Not Implemented");
      let form = this.myForm;
      console.log(form.value)
      this.name.reset();
      this.email.reset();
      this.project.reset();
      this.message.reset();
    }else{
      this._alertService.warn("Please fill all required data");
    }
  }

  // Show scroll
  showScroll(){
    const scrollUp=document.getElementById('scroll-up')
    if(window.scrollY>=560){
      scrollUp?.classList.add('show-scroll');
    }else{
      scrollUp?.classList.remove('show-scroll');
    }

    let section =document.querySelectorAll('section');
    let navLinks= document.querySelectorAll('header nav a');

    section.forEach(sec=>{
      let top = window.scrollY
      let offset = sec.offsetTop - 140;
      let height = sec.offsetHeight;
      let id= sec.getAttribute('id');

      if(top>=offset && top<offset+height){
        navLinks.forEach(links =>{          
          links.classList.remove('active_nav');
          document.querySelector('header nav a[href*='+ id +']')?.classList.add('active_nav');
        })
      }
    })
  }

  serviceOpen(i:any){
    this.serviceIndex=i;
  }
  serviceClose(i:any){
    this.serviceIndex=i;
  }
  sendMail(){
      let mail ='patiljaikishan4@gmail.com';
      let a = document.createElement('a');
      a.href='mailto:'+mail;
      a.click();
  }
  makeCall(){
    let number = 8788642935;
    let a =document.createElement('a');
    a.href ='tel:'+number;
    a.click();
  }

  locate(){
    window.open("https://maps.app.goo.gl/jL2iGSdu7xqEuAPE9", "_blank");
  }
  images=[
    {
      imageSrc:'../../../../../assets/images/noPhoto.png',
      imageAlt:'test'
    },
    {
      imageSrc:'../../../../../assets/images/code.jpg',
      imageAlt:'test'
    },
    {
      imageSrc:'../../../../../assets/images/lapcode.jpg',
      imageAlt:'test'
    },
  ]
}
  