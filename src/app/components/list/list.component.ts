import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../models/pokemon.interface';
import { animate, transition, trigger, stagger, style, query } from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  animations: [
    trigger('appearGradualy', [
      transition(':enter', 
          [
            style({ opacity: 0, transform: 'translateY(-10px)' }),
            animate(
              '150ms', 
              style({ opacity: 1, transform: 'translateY(0px)' })
            )
          ],
      ),      
    ])
  ]
})
export class ListComponent implements OnInit {
  constructor(private pokemonService: PokemonsService) {}

  isLoading: boolean = true;
  pokemons: Pokemon[] = [];
  currentDisplay: string = 'card-grid';

  ngOnInit(): void {
    this.pokemonService
    .getAllPokemon()
    .subscribe((pokemons) => {
      this.pokemons = pokemons.results
      this.isLoading = false
    }
    )
  }
}
