import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../models/pokemon.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  displayedColumns: string[] = ['index', 'name'];

  @Input() pokemons!: Pokemon[];
}
