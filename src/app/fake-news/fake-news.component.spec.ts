import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeNewsComponent } from './fake-news.component';

describe('FakeNewsComponent', () => {
  let component: FakeNewsComponent;
  let fixture: ComponentFixture<FakeNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
