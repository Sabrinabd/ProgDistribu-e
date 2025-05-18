import {
  Component,
  computed,
  ElementRef,
  input,
  model,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cocktail } from 'app/partage/interfaces';

@Component({
  selector: 'app-cocktails-list',
  imports: [FormsModule],
  template: `
    <h2 class="mb-20">Liste des cocktails</h2>
    <input
      [(ngModel)]="filter"
      #search
      type="text"
      class="mb-20 w-100"
      placeholder="Chercher un cocktail"
    />
    <ul class="mb-20">
      @let likedIds = likedCocktailIds(); @for (cocktail of filteredCocktails();
      track cocktail.name) { @let active = cocktail._id ===
      selectedCocktailId();
      <li
        [class.active-item]="active"
        [class.text-primary]="active"
        (click)="selectCocktail(cocktail._id)"
        class="px-12 py-6 my-2 radius"
      >
        <h3 class="flex">
          <span class="flex-auto">{{ cocktail.name }}</span>
          @if (likedIds.includes(cocktail._id)) {
          <span> &#10084;</span>
          }
        </h3>
      </li>
      }
    </ul>
  `,
  styles: `
    li:hover {
      cursor: pointer;
      background-color: var(--light);
      transition: all 0.4s;
    }
  `,
  host: {
    '(window:keydown)': 'keyboardInteraction($event)',
  },
})
export class CocktailsListComponent {
  search = viewChild<ElementRef<HTMLInputElement>>('search');
  filter = signal('');
  cocktails = input<Cocktail[]>();
  filteredCocktails = computed(() =>
    this.cocktails()?.filter(({ name }) =>
      name.toLowerCase().includes(this.filter().toLowerCase())
    )
  );
  selectedCocktailId = model<string | null>();
  likedCocktailIds = input.required<string[]>();
  likecocktail = output<string>();
  unlikecocktail = output<string>();

  selectCocktail(cocktailId: string) {
    this.selectedCocktailId.set(cocktailId);
  }

  navigateCocktails(direction: 'up' | 'down') {
    const cocktails = this.cocktails();
    if (!cocktails?.length) return;

    let currentIndex = cocktails.findIndex(
      ({ _id }) => _id === this.selectedCocktailId()
    );

    // si aucun cocktail n'est sélectionné, on sélectionne le premier ou le dernier
    // sinon, on se déplace d'un cran vers le haut ou vers le bas
    if (currentIndex === -1) {
      currentIndex = direction === 'down' ? 0 : cocktails.length - 1;
    } else {
      currentIndex =
        direction === 'down'
          ? (currentIndex + 1) % cocktails.length
          : (currentIndex - 1 + cocktails.length) % cocktails.length;
    }

    this.selectedCocktailId.set(cocktails[currentIndex]._id);
  }

  keyboardInteraction({ key }: KeyboardEvent) {
    switch (key) {
      case 'Escape':
        this.selectedCocktailId.set(null);
        break;
      case 'Enter': {
        const selectedCocktailId = this.selectedCocktailId();
        if (selectedCocktailId) {
          const isLiked = this.likedCocktailIds().includes(selectedCocktailId);
          isLiked
            ? this.unlikecocktail.emit(selectedCocktailId)
            : this.likecocktail.emit(selectedCocktailId);
        }
        break;
      }
      case 'ArrowUp':
        this.navigateCocktails('up');
        break;
      case 'ArrowDown':
        this.navigateCocktails('down');
        break;
      default:
        this.search()?.nativeElement.focus();
        break;
    }
  }
}
