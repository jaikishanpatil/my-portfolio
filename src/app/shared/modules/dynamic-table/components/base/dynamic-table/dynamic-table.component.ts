import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class DynamicTableComponent implements OnInit {
  @Input() columns: any[] = [];
  @Input() data: any[] = [];
  @Input() itemsPerPageRow:any=[5,10,15,20,25]
  @Input() itemsPerPage: number = 5;
  @Input() totalItems: number = 0;
  @Input() currentPage: number = 1;
  @Output() onSearchChange= new EventEmitter<any>();
  @Output() onClickChange= new EventEmitter<any>();
  @ViewChild('defaultTemplate') defaultTemplate!: TemplateRef<any>;

  pagedData: any[] | undefined;
  pages: number[] | undefined;
  constructor() {}

  ngOnInit(): void {
    this.updatePages();
    this.updatePagedData();
  }

  ngOnChanges(): void {
    this.updatePages();
    this.updatePagedData();
  }

  updatePagedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedData = this.data.slice(startIndex, endIndex);
  }

  onSearch(event:any){
    this.onSearchChange.emit(event);
  }

  updatePages() {
    const pageCount = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = [];
    for (let i = 1; i <= pageCount; i++) {
      this.pages.push(i);
    }
  }

  onClick(event:any,row:any,index:number){
    let rowData={
      event:event,
      row:row,
      index:index
    }
    this.onClickChange.emit(rowData);
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
    this.updatePagedData();
  }

  getDefaultTemplate(): TemplateRef<any> {
    return this.defaultTemplate;
  }

  getColumnTemplate(column: any): TemplateRef<any> {
    return column.templateRef || this.getDefaultTemplate();
  }

  itemsPerPageChange(event:any){
    this.itemsPerPage=event;
    this.updatePages();
    this.updatePagedData(); 
  }
}
