import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightmidComponent } from './rightmid.component';

describe('RightmidComponent', () => {
  let component: RightmidComponent;
  let fixture: ComponentFixture<RightmidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightmidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightmidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
