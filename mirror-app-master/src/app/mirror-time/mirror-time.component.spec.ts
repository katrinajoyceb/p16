import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MirrorTimeComponent } from './mirror-time.component';

describe('MirrorTimeComponent', () => {
  let component: MirrorTimeComponent;
  let fixture: ComponentFixture<MirrorTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirrorTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MirrorTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
