import { Component } from '@angular/core';

@Component({
  selector: 'app-cancel',
  template: `
    <div class="cancel-message">
      <h1>Paiement échoué</h1>
      <p>Le paiement n'a pas pu être effectué. Veuillez réessayer.</p>
      <a routerLink="/cart" class="btn">Retour au panier</a>
    </div>
  `,
  styles: [
    `
      .cancel-message {
        text-align: center;
        margin-top: 50px;
      }
      .btn {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #dc3545;
        color: white;
        text-decoration: none;
        border-radius: 5px;
      }
      .btn:hover {
        background-color: #c82333;
      }
    `,
  ],
})
export class CancelComponent {}