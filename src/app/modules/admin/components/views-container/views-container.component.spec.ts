import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsContainerComponent } from './views-container.component';

describe('ViewsContainerComponent', () => {
  let component: ViewsContainerComponent;
  let fixture: ComponentFixture<ViewsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
