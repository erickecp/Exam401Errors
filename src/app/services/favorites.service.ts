import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  misFavoritos:any[] = [];
  constructor() {
    this.getLocalFavorites;
   }

  inFavorites(product: any){
    return !!this.misFavoritos.find((prod: any) => prod.id === product.id);
  }

  get getLocalFavorites(){
    this.misFavoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    return this.misFavoritos;
  }
  addFavorite(product: any){
    const found = this.misFavoritos.find((prod: any) => prod.id === product.id);
    if(found){
      this.misFavoritos = this.misFavoritos.filter((prod:any) => prod.id !== found.id);
      localStorage.setItem('favorites', JSON.stringify(this.misFavoritos));
      return;
    }
    this.misFavoritos.push(product);
    localStorage.setItem('favorites', JSON.stringify(this.misFavoritos));
  }

}
