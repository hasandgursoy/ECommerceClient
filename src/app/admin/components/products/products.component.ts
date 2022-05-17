import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom)
    this.httpClientService.get<Product[]>({
      controller: "products"
    }).subscribe(data => console.log(data))

    // this.httpClientService.post({ controller: "products" }, {
    //   name:"Kalem",
    //   stock:100,
    //   price:15
    // }).subscribe();

    // this.httpClientService.post({ controller: "products" }, {
    //   name:"Silgi",
    //   stock:150,
    //   price:10
    // }).subscribe();

    // this.httpClientService.put({
    //   controller:"products",
    // },{
    //   id:"f153e64e-8704-4637-9771-94f5ed6aa8c2",
    //   name:"Renkli Silgi",
    //   stock:1500,
    //   price:5.5
    // }).subscribe();

    // this.httpClientService.delete({
    //   controller:"products"
    // },"f153e64e-8704-4637-9771-94f5ed6aa8c2").subscribe();
  }

}
