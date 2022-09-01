import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionWithComponent } from './interaction-with.component';

describe('InteractionWithComponent', () => {
  let component: InteractionWithComponent;
  let fixture: ComponentFixture<InteractionWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionWithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractionWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
