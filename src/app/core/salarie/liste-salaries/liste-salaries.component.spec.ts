import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSalariesComponent } from './liste-salaries.component';

describe('ListeSalariesComponent', () => {
  let component: ListeSalariesComponent;
  let fixture: ComponentFixture<ListeSalariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSalariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeSalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
