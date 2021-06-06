import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationJsHeroesComponent } from './nation-js-heroes.component';

describe('NationJsHeroesComponent', () => {
  let component: NationJsHeroesComponent;
  let fixture: ComponentFixture<NationJsHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationJsHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationJsHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
