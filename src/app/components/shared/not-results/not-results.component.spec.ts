import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotResultsComponent } from './not-results.component';

describe('NotResultsComponent', () => {
  let component: NotResultsComponent;
  let fixture: ComponentFixture<NotResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
