import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmeetPageComponent } from './allmeet-page.component';

describe('AllmeetPageComponent', () => {
  let component: AllmeetPageComponent;
  let fixture: ComponentFixture<AllmeetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmeetPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllmeetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
