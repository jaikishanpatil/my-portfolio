import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-dyamic-search',
  templateUrl: './dyamic-search.component.html',
  styleUrls: ['./dyamic-search.component.scss'],
})
export class DyamicSearchComponent implements OnInit {
  //Declaration Part
  @Output() change = new EventEmitter<any>();
  @Input() insInputShown: boolean = false;
  @Input() title: string = 'Search';
  @ViewChild('input', { static: true }) input: ElementRef | any;
  searchKey: any;
  value: any;

  constructor() {}

  ngOnInit(): void {}
  isExpanded = false;
  toggleSearch() {
    this.isExpanded = !this.isExpanded;
  }

  showInput() {
    this.searchKey = this.value;
    this.insInputShown = true;
    this.input && this.input.nativeElement.focus();
  }
  hideInput() {
    this.searchKey = '';
    this.input.value = '';
    this.value = '';
  }

  onInput(val: string) {
    if (val !== this.value) {
      this.value = val;
      this.change.emit(val);
    }
  }
}
