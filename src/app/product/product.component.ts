import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  product: Product = {
    name: "Item 1",
    price: 999,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    stt: true
  };
  onchange(){
    this.product.stt = false;
  }
}
