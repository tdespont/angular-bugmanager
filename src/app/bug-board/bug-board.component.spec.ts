import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugBoardComponent } from './bug-board.component';

describe('BugBoardComponent', () => {
  let component: BugBoardComponent;
  let fixture: ComponentFixture<BugBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
