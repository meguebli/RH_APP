import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSalarieComponent } from './ajouter-salarie.component';

describe('AjouterSalarieComponent', () => {
  let component: AjouterSalarieComponent;
  let fixture: ComponentFixture<AjouterSalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterSalarieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
