import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsNavbarComponent } from './views-navbar.component';

describe('ViewsNavbarComponent', () => {
  let component: ViewsNavbarComponent;
  let fixture: ComponentFixture<ViewsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
