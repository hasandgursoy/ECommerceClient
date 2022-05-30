import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit
{

  constructor(spinner: NgxSpinnerService, private productService: ProductService,private alertfiy : AlertifyService)
  {
    super(spinner)
  }

  ngOnInit(): void
  {
  }

  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement)
  {

    const create_product: Create_Product = new Create_Product();
    this.showSpinner(SpinnerType.BallAtom);
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);
    this.productService.create(create_product , () => {
      this.hideSpinner(SpinnerType.BallAtom),
      this.alertfiy.message("Ürün başarıyla eklenmiştir.", {
        dismissOthers : false,
        messageType : MessageType.Success,
        position:Position.TopLeft,
      });
    });
    
  }

}
