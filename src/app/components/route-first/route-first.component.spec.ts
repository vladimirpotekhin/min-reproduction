import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFirstComponent } from './route-first.component';

describe('RouteFirstComponent', () => {
  let component: RouteFirstComponent;
  let fixture: ComponentFixture<RouteFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
