import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavBsComponent } from './main-nav-bs.component';

describe('MainNavBsComponent', () => {
  let component: MainNavBsComponent;
  let fixture: ComponentFixture<MainNavBsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavBsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavBsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
