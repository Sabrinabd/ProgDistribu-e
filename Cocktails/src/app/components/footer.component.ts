import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: ` <p class="text-sm text-semibold">© Sab 2024-2025</p> `,
  styles: `
    :host {
      display: flex;
      flex-direction: row;
      background-color: var(--gray-700);
      align-items: center;
      justify-content: center;
      color: white;
     
      
    }`,
})
export class FooterComponent {}
