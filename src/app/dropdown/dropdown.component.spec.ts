import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropDownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropDownComponent;
  let fixture: ComponentFixture<DropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropDownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
