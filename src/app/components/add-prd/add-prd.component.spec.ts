import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrdComponent } from './add-prd.component';

describe('AddPrdComponent', () => {
  let component: AddPrdComponent;
  let fixture: ComponentFixture<AddPrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPrdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
