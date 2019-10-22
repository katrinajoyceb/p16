import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MirrorstatsComponent } from './mirrorstats.component';

describe('MirrorstatsComponent', () => {
  let component: MirrorstatsComponent;
  let fixture: ComponentFixture<MirrorstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirrorstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MirrorstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
