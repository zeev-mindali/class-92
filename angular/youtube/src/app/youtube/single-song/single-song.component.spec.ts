import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSongComponent } from './single-song.component';

describe('SingleSongComponent', () => {
  let component: SingleSongComponent;
  let fixture: ComponentFixture<SingleSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
