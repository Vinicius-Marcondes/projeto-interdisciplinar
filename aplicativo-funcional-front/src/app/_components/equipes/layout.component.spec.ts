import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutEquipesComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutEquipesComponent;
  let fixture: ComponentFixture<LayoutEquipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutEquipesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
