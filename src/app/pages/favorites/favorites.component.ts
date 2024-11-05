import { Component, inject } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
private _favServices = inject(FavoritesService);
constructor(){
  this.getMyFavorites;
}
get getMyFavorites(){
  return this._favServices.getLocalFavorites;
}
}
