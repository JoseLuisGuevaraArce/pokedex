import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AddComponent } from './add.component';

let MockPokRouter = {
  navigate: () => {}
};

describe('Add Component', () => {
  let component: AddComponent,
    fixture: ComponentFixture<AddComponent>,
    router: Router;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [AddComponent],
        providers: [
          {provide: Router, useValue: MockPokRouter}
        ]
      });
      fixture = TestBed.createComponent(AddComponent);
      component = fixture.componentInstance;
      router = TestBed.inject(Router);
      spyOn(router, 'navigate');
    });

    it('should create', () => {
      expect(component).toBeDefined();
    });

    it('should call router navigate', () => {
      component.goToAddPokemon();
      expect(router.navigate).toHaveBeenCalledWith(['/pokedex/add-pokemon']);
    });
});