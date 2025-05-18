import { Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { SuccessComponent } from './components/success.component';
import { CancelComponent } from './components/cancel.component';

export const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    children: [
      {
        path: 'success',
        component: SuccessComponent, // Composant pour /cart/success
      },
      {
        path: 'cancel',
        component: CancelComponent, // Composant pour /cart/cancel
      },
    ],
  },
];