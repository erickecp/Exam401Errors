import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatziService } from '../../services/platzi.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  private _activeRoute = inject(ActivatedRoute);
  objeto: any = {};
  private _platziS = inject(PlatziService);
  constructor(){
    this._activeRoute.params.subscribe((params:any) =>{
      console.log(params.id);
      this.getProduct(params.id);
    })
  }

  getProduct(id:string){
    this._platziS.getProduct(id).subscribe((res:any)=>{
      console.log(res);
      this.objeto = res;
    })
  }
}
