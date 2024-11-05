import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'categorias',
    component: SearchComponent
  },
  {
    path: 'favoritos',
    component: FavoritesComponent
  },
  {
    path: 'product/id',
    component: ProductComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
