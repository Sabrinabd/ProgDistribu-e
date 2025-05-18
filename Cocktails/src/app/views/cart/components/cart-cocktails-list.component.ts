import { Component, computed, effect, input } from '@angular/core';
import { Cocktail } from 'app/partage/interfaces';

@Component({
  selector: 'app-cart-cocktails-list',
  imports: [],
  template: `
    <h2 class="mb-20">Liste des cocktails</h2>
    <ul>
      @for(cocktail of cocktailsDisplays(); track $index) {
      <li class="my-2">
        {{ cocktail[0] }} : <strong>{{ cocktail[1] }}</strong>
      </li>
      } @empty {
      <p>Aucun cocktail n'a été ajouté pour le moment</p>
      }
    </ul>
  `,
  styles: `:host { display: block; }`,
})
export class CartCocktailsListComponent {
  cocktails = input<Cocktail[]>([]);
  cocktailsDisplays = computed(() =>
    Object.entries(
      this.cocktails().reduce((acc, i) => {
        if (acc[i.name]) {
          acc[i.name]++;
        } else {
          acc[i.name] = 1;
        }
        return acc;
      }, {} as { [s: string]: number })
    )
  );
}
