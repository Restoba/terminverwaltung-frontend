import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinecapacityListComponent } from './vaccinecapacity-list.component';

describe('VaccinecapacityListComponent', () => {
  let component: VaccinecapacityListComponent;
  let fixture: ComponentFixture<VaccinecapacityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinecapacityListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinecapacityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
