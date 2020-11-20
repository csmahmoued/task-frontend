import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumverifyComponent } from './numverify.component';

describe('NumverifyComponent', () => {
  let component: NumverifyComponent;
  let fixture: ComponentFixture<NumverifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumverifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
