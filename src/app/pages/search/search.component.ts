import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlatziService } from '../../services/platzi.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  busqueda: string = '';
  load = false;
  misCategorias: any[] =[]
  productos: any[] = [];
  private _platziS = inject(PlatziService)
  constructor(){
    this.getProductByCat('electronics')
  }
  getCategories() {
    this._platziS.getCategories().subscribe( (result: any) =>{
      console.log('Categorias', result);
      this.misCategorias = result;
    })
  }

  getProductByCat(cat: string){
    this.productos = [];
    this.load = false;
    this._platziS.getProductsByCat(cat).subscribe((res: any)=>{
      console.log(res);
      this.load = true;
      this.productos = res
    })
  }
}
