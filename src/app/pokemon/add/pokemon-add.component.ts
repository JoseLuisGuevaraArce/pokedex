import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { forbiddenNameValidator } from "../pokemon-helper";

@Component({
  selector: 'pokemon-add',
  templateUrl: './pokemon-add.component.html',
  styleUrls: ['./pokemon-add.component.less']
})

export class PokemonAddComponent implements OnInit {
  profileForm = this.fb.group({
    pokemonName: ['', [Validators.required, Validators.minLength(2)]],
    pokemonDescription:  ['', Validators.minLength(4)],
    address: this.fb.group({
      street: ['', forbiddenNameValidator(/\d+/g)],
      city: [''],
      state: [''],
      zip: ['']
    }),
    types: this.fb.array([
      this.fb.control('')
    ])
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  get types() {
    return this.profileForm.get('types') as FormArray;
  }

  submit(): void {
    console.log(this.profileForm);
  }

  addType(): void {
    this.types.push(this.fb.control(''));
  }
}