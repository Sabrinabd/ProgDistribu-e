import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  private apiUrl = 'http://backend:3000'; // URL du backend

  constructor(private http: HttpClient) {}

  createCheckoutSession(cocktails: Cocktail[]): Observable<{ url: string }> {
    return this.http.post<{ url: string }>(
      `${this.apiUrl}/create-checkout-session`,
      { cocktails }
    );
  }
}
