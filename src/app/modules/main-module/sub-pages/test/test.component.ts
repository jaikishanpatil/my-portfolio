import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AlertService } from 'src/app/shared/modules/alerts/alert.service';
import {AngularFireStorage} from '@angular/fire/compat/storage'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private alertService:AlertService,private http: HttpClient,private firebaseStorage:AngularFireStorage) { }
  text: string = '';
  columns: any | undefined;
  data: any[] = [];
  searchData:any
  selectedFile: File|any;

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
  click(){
    this.alertService.warn("Functionility unimplimented")
  }

  // only for angular

  async onSelectFile(event:any){
    const file = event.target.files[0];
    if(file){
      const path = `test/${file.name}_${new Date().getTime()}`
      const uploadTask = await this.firebaseStorage.upload(path,file);
      const url = await uploadTask.ref.getDownloadURL();
      console.log("url =>",url)
    }
  }


  // this is for angular to node 
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }
  onFileChangeMultiple(event: any) {
    this.selectedFile = event.target.files;
  }
  upload() {
    if (!this.selectedFile) {
      this.alertService.warn("Please select the file first")
      return;
    }
    let formData = new FormData();
    formData.append('productImage', this.selectedFile,this.selectedFile.name);
    let body={
      "productName":"MI K51 max",
      "productDescription":" Hardcoded Mobiles",
      "productPrice":"11000",
      "productCategory":"Mobiles",
      "productQuantity":22,
      "image":formData
    }
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTcwNzMxMDQyOCwiZXhwIjoxNzA3MzEyMjI4fQ.LVapWRZ6esZzcTHrzsIZmJM9g_NbmY18b2UV4lnNPrY';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    this.http.post('http://localhost:8000/api/product/create', body,{headers}).subscribe(
      (response) => {
        console.log('Image uploaded successfully:', response);
      },
      (error) => {
        console.error('Error uploading image:', error);
      }
    );
  }

// upload files to nodejs using apis
  async uploadImages(){
    const formData= new FormData()
    formData.append('file',this.selectedFile)
    formData.append('name',"Myfile")
    console.log(await formData.get("file"))
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTcwOTYyNjI1NywiZXhwIjoxNzA5NjI4MDU3fQ.BMgrfr2iXt2mNKzGQzjQA_hp2noc2AEIzChI_4wP9jY"
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    this.http.post('http://localhost:8000/api/product/uploadImage', formData,{headers}).subscribe(
      (response) => {
        console.log('Image uploaded successfully:', response);
      },
      (error) => {
        console.error('Error uploading image:', error);
      }
    );
  }
  async uploadImagesMultiple(){
    const formData= new FormData()
    for(let img of this.selectedFile){
      formData.append('files',img)
      console.log(await formData.get("files"))
    }
    formData.append('name',"Myfile")
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTcwOTYyNjI1NywiZXhwIjoxNzA5NjI4MDU3fQ.BMgrfr2iXt2mNKzGQzjQA_hp2noc2AEIzChI_4wP9jY"
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    this.http.post('http://localhost:8000/api/product/uploadImageMulti', formData,{headers}).subscribe(
      (response) => {
        console.log('Image uploaded successfully:', response);
      },
      (error) => {
        console.error('Error uploading image:', error);
      }
    );
  }
}
