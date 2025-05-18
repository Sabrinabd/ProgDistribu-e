import { Injectable, signal } from '@angular/core';
import { Cocktail } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  likedCocktailIds = signal<string[]>([]);

  cocktails = signal<Cocktail[]>([]);

  likeCocktail(cocktailId: string) {
    this.likedCocktailIds.update((likedCocktails) => [
      ...likedCocktails,
      cocktailId,
    ]);
  }
  unlikeCocktail(cocktailId: string) {
    this.likedCocktailIds.update((likedCocktails) =>
      likedCocktails.filter((id) => id !== cocktailId)
    );
  }
  addcocktail(cocktails: Cocktail[]) {
    this.cocktails.update((i) => [...i, ...cocktails]);
  }
  clearCart() {
  
    this.cocktails.set([]);
    console.log('Panier vidé');
  }
}
