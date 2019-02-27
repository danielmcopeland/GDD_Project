import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTranscriptComponent } from './content-transcript.component';

describe('ContentTranscriptComponent', () => {
  let component: ContentTranscriptComponent;
  let fixture: ComponentFixture<ContentTranscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTranscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTranscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
