import { Component, Input, OnChanges } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnChanges{

  productList:IProduct[];
  productListByCategory:IProduct[];

  @Input() recievedSelectedCatId:number=0;

  getProductsByCategoryId():void
  {
    if(this.recievedSelectedCatId ==0)
    {
      this.productListByCategory = this.productList;
    }
    else
     this.productListByCategory = this.productList.filter(x=>x.categoryId == this.recievedSelectedCatId);
  }

  constructor() {
   
    this.productList = 
    [
      {
        id:1 , name:'HP Labtop',price:4500,
        quantity:4,imgUrl:'https://th.bing.com/th/id/OIP.puzai_D4808Fi7vlZTj3dQHaFh?pid=ImgDet&rs=1',categoryId:1
      },
      {
        id:2 , name:'Dell Labtop',price:5600,
        quantity:5,imgUrl:'https://th.bing.com/th/id/OIP.puzai_D4808Fi7vlZTj3dQHaFh?pid=ImgDet&rs=1',categoryId:1
      },
      {
        id:3 , name:'iPhone 13Pro',price:26000,
        quantity:0,imgUrl:'https://www.xtsmart.vn/vnt_upload/product/09_2021/thumbs/(600x600)_crop_iphone_13_pro_max.png',categoryId:2
      }
    ];
    this.productListByCategory = this.productList;

  }

  ngOnChanges(): void {
    this.getProductsByCategoryId();
  }

}
