import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymeetPageComponent } from './mymeet-page.component';

describe('MymeetPageComponent', () => {
  let component: MymeetPageComponent;
  let fixture: ComponentFixture<MymeetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymeetPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MymeetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
