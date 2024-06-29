import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: any;
  fields = [
    "title",
    "type",
    "description",
    "price",
    "rating"
  ]
  @ViewChild('myModal', { static: true }) myModal!: ElementRef;
  constructor(private http: HttpService) { }
  isOpenProduct = false;
  addProductForm = new FormGroup({
    title: new FormControl(''),
    type: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    rating: new FormControl('')
  });

  ngOnInit(): void {
    this.http.get('product_list').subscribe((result: any) => {
      console.log(result, 'Result___');

      this.productList = result['data']
    });
  }
  ngOnChanges(){
    console.log('On componentB running: ngOnChanges');
    
  }
  addProduct() {
    this.isOpenProduct = !this.isOpenProduct;
  }
  submit() {
    console.log(this.addProductForm.value);

    setTimeout(() => {
      this.addProductForm.reset();
      this.isOpenProduct = !this.isOpenProduct;
    }, 2000);

  }
  cancel() {
    this.isOpenProduct = !this.isOpenProduct;
  }
}
