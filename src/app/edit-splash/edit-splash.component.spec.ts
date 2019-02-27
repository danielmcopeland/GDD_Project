import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSplashComponent } from './edit-splash.component';

describe('EditSplashComponent', () => {
  let component: EditSplashComponent;
  let fixture: ComponentFixture<EditSplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSplashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
