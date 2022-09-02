import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsSidePanelComponent } from './views-side-panel.component';

describe('ViewsSidePanelComponent', () => {
  let component: ViewsSidePanelComponent;
  let fixture: ComponentFixture<ViewsSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsSidePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
