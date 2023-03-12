import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}
  text: string = '';
  columns: any | undefined;
  data: any[] = [];

  @ViewChild('nameColumnTemplate',{static:true}) nameColumnTemplate: TemplateRef<any> | any;
  @ViewChild('emailColumnTemplate',{static:true}) emailColumnTemplate: TemplateRef<any> | any;
  @ViewChild('phoneColumnTemplate',{static:true}) phoneColumnTemplate: TemplateRef<any> | any;
  
  ngOnInit(): void {
    this.columns = [
      {
        key: 'name',
        label: 'Name',
        templateRef: this.nameColumnTemplate,
        visible: true,
      },
      {
        key: 'email',
        label: 'Email',
        templateRef: this.emailColumnTemplate,
        visible: true,
      },
      {
        key: 'phone',
        label: 'Phone',
        templateRef: this.phoneColumnTemplate,
        visible: true,
      },
    ];
    this.data=[
      {
        name:'Jaikishan',
        email:'jaikishan@gmail.com',
        phone:'8788642935'
      },
      {
        name:'Jaikishan',
        email:'jaikishan@gmail.com',
        phone:'8788642935'
      },
      {
        name:'Jaikishan',
        email:'jaikishan@gmail.com',
        phone:'8788642935'
      },
      {
        name:'Jaikishan',
        email:'jaikishan@gmail.com',
        phone:'8788642935'
      },
      {
        name:'Jaikishan',
        email:'jaikishan@gmail.com',
        phone:'8788642935'
      },
      {
        name:'Jasdfdfacxcishan',
        email:'jaikishan@gmail.com',
        phone:'8788642935'
      },
      {
        name:'Ja2121an',
        email:'jaikishan@gmail.com',
        phone:'8788642935'
      },
      {
        name:'Jaikiswwaaadahan',
        email:'jaikishan@gmail.com',
        phone:'8788642935'
      },
      {
        name:'sdasds',
        email:'jaikishan@gmail.com',
        phone:'8788642935'
      },
    ]
  }

  onChange(event: string) {
    if (event.length) {
      this.text = event;
      console.log(event);
    }
  }
}
