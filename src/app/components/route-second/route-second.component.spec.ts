import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSecondComponent } from './route-second.component';

describe('RouteSecondComponent', () => {
  let component: RouteSecondComponent;
  let fixture: ComponentFixture<RouteSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
