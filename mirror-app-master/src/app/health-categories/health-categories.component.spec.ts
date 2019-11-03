import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCategoriesComponent } from './health-categories.component';

describe('HealthCategoriesComponent', () => {
  let component: HealthCategoriesComponent;
  let fixture: ComponentFixture<HealthCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
