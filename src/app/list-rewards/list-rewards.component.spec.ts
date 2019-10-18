import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRewardsComponent } from './list-rewards.component';

describe('ListRewardsComponent', () => {
  let component: ListRewardsComponent;
  let fixture: ComponentFixture<ListRewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
