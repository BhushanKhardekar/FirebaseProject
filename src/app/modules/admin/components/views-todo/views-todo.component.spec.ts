import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsTodoComponent } from './views-todo.component';

describe('ViewsTodoComponent', () => {
  let component: ViewsTodoComponent;
  let fixture: ComponentFixture<ViewsTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
