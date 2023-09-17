import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  /* beforeEach(waitForAsync(()=>{
    TestBed.configureTestingModule({
      declarations: [RegisterComponent]
    }).compileComponents().then(()=>{
      fixture = TestBed.createComponent(RegisterComponent);
      component = fixture.componentInstance;
      });
    }
  )); */

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
