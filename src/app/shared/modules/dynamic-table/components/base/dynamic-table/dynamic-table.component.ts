import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class DynamicTableComponent implements OnInit {
  @Input() columns: any[] = [];
  @Input() data: any[] = [];
  @Input() itemsPerPage: number = 5;
  @Input() totalItems: number = 0;
  @Input() currentPage: number = 1;
  @ViewChild('defaultTemplate') defaultTemplate!: TemplateRef<any>;

  pagedData: any[] | undefined;
  pages: number[] | undefined;

  constructor() {}

  ngOnInit(): void {
    this.updatePages();
    this.updatePagedData();
  }

  updatePagedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedData = this.data.slice(startIndex, endIndex);
  }

  updatePages() {
    const pageCount = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = [];
    for (let i = 1; i <= pageCount; i++) {
      this.pages.push(i);
    }
  }

  onClick(event:any,row:any,index:number){
    console.log("ROW",row)
    console.log("Index",index)
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
}
