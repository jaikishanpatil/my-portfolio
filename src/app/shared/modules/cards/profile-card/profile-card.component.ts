import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Input() data:any=[
    {
      image:'../../../../../assets/images/jaikisha_about_img.png',
      name:'Jaikishan Patil',
      description:'Full stack engineer',
      technologies:[
        'Angular',
        'NodeJs',
        'MySQL'
      ],
      isActionButtonsEnable:true,
    },
    {
      image:'../../../../../assets/images/jaikisha_about_img.png',
      name:'Jaikishan Patil',
      description:'Full stack engineer',
      technologies:[
        'Angular',
        'NodeJs',
        'MySQL'
      ],
      isActionButtonsEnable:true,
    }
  ]
  @Output() bookMe= new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  book(item:any){
    this.bookMe.emit(item);
  }
}
