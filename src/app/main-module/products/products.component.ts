import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: any;
  @ViewChild('myModal', {static : true}) myModal!:ElementRef;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.get('product_list').subscribe((result: any) => {
      this.productList = result['data']
    });
  }
  ngAfterViewInit () {
    setTimeout(() =>{
      this.myModal.nativeElement.click();;
    }, 5000)
  }
}
