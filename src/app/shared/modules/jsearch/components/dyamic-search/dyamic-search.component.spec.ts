import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyamicSearchComponent } from './dyamic-search.component';

describe('DyamicSearchComponent', () => {
  let component: DyamicSearchComponent;
  let fixture: ComponentFixture<DyamicSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyamicSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DyamicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
