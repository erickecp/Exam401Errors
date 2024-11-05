import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  private _favoritesS = inject(FavoritesService);
  private _router = inject(Router);
  @Input() product = {};

  addToFavorites(product:any){
    this._favoritesS.addFavorite(product);
    const r = this._favoritesS.inFavorites(product);
    let msn;
    if(r){
      msn =  product.title + ' agregado a favoritos!'
    } else{
      msn =  product.title + ' eliminado de favoritos!'
    }
    Swal.fire({
      title: msn,
      icon: 'success',
      timer: 2000,
      toast: true,
      position: 'top-end',
      showConfirmButton: false
    });
  }

  isInFavorites(product:any){
    const r = this._favoritesS.inFavorites(product);
    if(r){
      return 'fa fa-heart';
    }else{
      return 'fa fa-heart-o';
    }
  }

  goToDetail(id:string){
    this._router.navigateByUrl('/product/'+id)
  }

}
