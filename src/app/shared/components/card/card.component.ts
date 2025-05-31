import { Component, Input} from '@angular/core';
import { Pokemon } from '../../../models/pokemon.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() pokemon!: Pokemon;
  @Input() index!: Number;
}