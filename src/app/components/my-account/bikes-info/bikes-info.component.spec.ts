import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesInfoComponent } from './bikes-info.component';

describe('BikesInfoComponent', () => {
  let component: BikesInfoComponent;
  let fixture: ComponentFixture<BikesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
