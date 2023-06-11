import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopiLoopComponent } from './loopi-loop.component';

describe('LoopiLoopComponent', () => {
  let component: LoopiLoopComponent;
  let fixture: ComponentFixture<LoopiLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopiLoopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoopiLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
