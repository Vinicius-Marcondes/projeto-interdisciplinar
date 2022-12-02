import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEquipesComponent } from './add-edit-equipes.component';

describe('AddEditComponent', () => {
  let component: AddEditEquipesComponent;
  let fixture: ComponentFixture<AddEditEquipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditEquipesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
