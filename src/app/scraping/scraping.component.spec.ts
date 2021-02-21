import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapingComponent } from './scraping.component';

describe('ScrapingComponent', () => {
  let component: ScrapingComponent;
  let fixture: ComponentFixture<ScrapingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrapingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
