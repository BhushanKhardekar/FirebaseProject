import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsPostComponent } from './views-post.component';

describe('ViewsPostComponent', () => {
  let component: ViewsPostComponent;
  let fixture: ComponentFixture<ViewsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
