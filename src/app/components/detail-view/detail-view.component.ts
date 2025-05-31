import { Component, OnInit, signal } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDetail } from '../../models/pokemon.interface';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.css'
})
export class DetailViewComponent implements OnInit {

  readonly panelOpenState = signal(false);
  pokemonDetail?: PokemonDetail | null;
  isLoading: boolean = true;


  constructor(
    private pokemonService: PokemonsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    if(!identifier){
      console.log('1')
        this.router.navigateByUrl('/');
        return;
    }

    this.pokemonService.getPokemonById(identifier).subscribe({
      next: (pokemon) => {

      if(!pokemon){
        this.router.navigateByUrl('/');
        return;
      }

      this.isLoading = false
      this.pokemonDetail = pokemon;
      console.log(this.pokemonDetail)
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false
        this.pokemonDetail = null
      }
    });
  }
}
