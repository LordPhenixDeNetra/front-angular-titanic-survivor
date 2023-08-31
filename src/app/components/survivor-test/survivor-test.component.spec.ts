import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivorTestComponent } from './survivor-test.component';

describe('SuvivorTestComponent', () => {
  let component: SurvivorTestComponent;
  let fixture: ComponentFixture<SurvivorTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurvivorTestComponent]
    });
    fixture = TestBed.createComponent(SurvivorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
