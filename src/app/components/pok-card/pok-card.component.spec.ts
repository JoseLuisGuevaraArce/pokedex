import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { PokCardComponent } from "./pok-card.component";

let MockPokRouter: Partial<Router>;

const imageUri = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png';
describe('Pokemon card test', () => {
  let component: PokCardComponent,
    fixture: ComponentFixture<PokCardComponent>,
    router: Router,
    p: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [PokCardComponent],
        providers: [
          {provide: Router, useValue: MockPokRouter}
        ]
      });
      fixture = TestBed.createComponent(PokCardComponent);
      component = fixture.componentInstance;
      router = TestBed.inject(Router);
      component.pokemon = { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'};
      p = fixture.nativeElement.querySelector('p');
    });

    it('should create', () => {
      expect(component).toBeDefined();
    });

    it('should get image', () => {
      expect(component.getImageUri()).toBe(imageUri);
    });

    it('should get image src', () => {
      fixture.detectChanges();
      const element: DebugElement = fixture.debugElement,
        imagecss = element.query(By.css('img')),
        img: HTMLElement = imagecss.nativeElement;

      expect(img.getAttribute('src')).toEqual(imageUri);
    });

    it('should find the <p> before load data', () => {
      expect(p.textContent).toEqual('');
    });

    it('should find the <p> after load data', () => {
      fixture.detectChanges();
      expect(p.textContent).toContain('Bulbasaur');
    });
});