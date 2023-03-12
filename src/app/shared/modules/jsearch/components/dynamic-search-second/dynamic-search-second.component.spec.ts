import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSearchSecondComponent } from './dynamic-search-second.component';

describe('DynamicSearchSecondComponent', () => {
  let component: DynamicSearchSecondComponent;
  let fixture: ComponentFixture<DynamicSearchSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicSearchSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSearchSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
