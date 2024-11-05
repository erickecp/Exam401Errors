import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { PlatziService } from '../../services/platzi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categorias: any[] = [];
  products: any[] = [];
  private _platziService = inject(PlatziService)
  constructor(){
    this._platziService.getProducts().subscribe( (resp: any) => {
      console.log(resp);
      this.products = resp;
    } )
  }


}
