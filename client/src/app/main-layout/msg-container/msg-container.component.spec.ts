import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgContainerComponent } from './msg-container.component';

describe('MsgContainerComponent', () => {
  let component: MsgContainerComponent;
  let fixture: ComponentFixture<MsgContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
