import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent {

  constructor(private router: Router) { }

  goToAddPokemon(): void {
    this.router.navigate(['/pokedex/add-pokemon']);
  }
}
