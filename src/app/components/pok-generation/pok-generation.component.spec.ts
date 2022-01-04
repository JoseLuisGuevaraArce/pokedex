import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PokemonService } from "src/app/pokemon/pokemon.service";
import { PokGenerationComponent } from "./pok-generation.component";

let MockPokemonService: {
  getGeneration: () => {}
};

describe('Pokemon Generation Component', () => {
  let component: PokGenerationComponent,
  fixture: ComponentFixture<PokGenerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokGenerationComponent],
      providers: [
        {provide: PokemonService, useValue: MockPokemonService}
      ]
    });

    fixture = TestBed.createComponent(PokGenerationComponent);
    component = fixture.componentInstance;
    component.generations = [
      {name: "generation-i", url: "https://pokeapi.co/api/v2/generation/1/"},
      {name: 'generation-ii', url: 'https://pokeapi.co/api/v2/generation/2/'}
    ]
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should show generations', () => {
    fixture.detectChanges();
    const generations = [
      {code: 'generation-i', text: 'Generation 1'},
      {code: 'generation-ii', text: 'Generation 2'}
    ]
    
    expect(component.customGeneration).toEqual(jasmine.objectContaining(generations));
  });
});