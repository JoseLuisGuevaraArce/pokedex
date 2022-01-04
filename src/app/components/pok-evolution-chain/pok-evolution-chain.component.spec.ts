import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { PokemonService } from "src/app/pokemon/pokemon.service";
import { PokEvolutionChainComponent } from "./pok-evolution-chain.component";

describe('Pokemon Evolution Chain Component', () => {
  let component: PokEvolutionChainComponent,
  fixture: ComponentFixture<PokEvolutionChainComponent>,
  router: Router,
  service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokEvolutionChainComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        {provide: PokemonService},
        {provide: Router, useValue: {navigate: () => {}}}
      ]
    });
    
    fixture = TestBed.createComponent(PokEvolutionChainComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    service = TestBed.inject(PokemonService);
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});