import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FORM_MODEL } from '../model/form-base.enum';

declare function portfolioSwiper(): void;
declare function testimonialSwiper(): void;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private readonly formbuilder: FormBuilder) {}

  //Form content
  form_models = FORM_MODEL;
  myForm: FormGroup | any;
  submitted: boolean = false;

  get name() {
    return this.myForm.controls[FORM_MODEL.NAME];
  }

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
    this.initilizeForm();
    portfolioSwiper();
    testimonialSwiper();
    this.qualificationTabs();
    this.serviceTab();
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

  submitForm() {
    if (this.myForm.valid) {
      let form = this.myForm;
      console.log(form.value)
    }
  }
}
  