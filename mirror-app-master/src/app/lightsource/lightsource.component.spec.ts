import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightsourceComponent } from './lightsource.component';

describe('LightsourceComponent', () => {
  let component: LightsourceComponent;
  let fixture: ComponentFixture<LightsourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightsourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightsourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
