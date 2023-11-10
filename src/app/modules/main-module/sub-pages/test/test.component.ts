import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }
  text: string = '';
  columns: any | undefined;
  data: any[] = [];
  searchData:any

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
        phone:'12457'
      },
    ]
    this.searchData = this.data;
  }

  onChange(event: string) {
    if (event.length) {
      this.text = event;
      console.log(event);
    }
  }

  onSearchTable(event:any){
    if(event){
      this.data=this.searchData.filter((x: any)=>{
        return x.name.toLowerCase().includes(event.toLowerCase()) || x.phone.toLowerCase().includes(event.toLowerCase())
      })
    }else{
      this.data=this.searchData
    }
  }
  onTableRowClick(event:any){
    console.log(event)
  }

  images=[
    {
      imageSrc:'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      imageAlt:'test'
    },
    {
      imageSrc:'https://www.kasandbox.org/programming-images/avatars/primosaur-ultimate.png',
      imageAlt:'test'
    },
    {
      imageSrc:'https://www.kasandbox.org/programming-images/avatars/purple-pi-pink.png',
      imageAlt:'test'
    },
    {
      imageSrc:'https://www.kasandbox.org/programming-images/avatars/purple-pi-teal.png',
      imageAlt:'test'
    },
    {
      imageSrc:'https://www.kasandbox.org/programming-images/avatars/purple-pi.png',
      imageAlt:'test'
    },
    {
      imageSrc:'https://www.kasandbox.org/programming-images/avatars/spunky-sam-green.png',
      imageAlt:'test'
    },
  ]

  book(event:any){
    console.log(event);
  }
}
