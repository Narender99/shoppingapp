import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  allProducts : any= [];

  constructor(private http: HttpClient) { }

  getAllProducts(){
    
    return this.http.get("http://localhost:8086/onlineshopping/api/product");
  }

  addProduct(product: any){
    
   console.log(product);
    return this.http.post("http://localhost:8086/onlineshopping/api/product", product);
  }

  deleteProduct(id: any){
   
     return this.http.delete("http://localhost:8086/onlineshopping/api/product/"+id);
    }

  updateProduct(product: any){
      
       return this.http.put("http://localhost:8086/onlineshopping/api/product", product);
      }

   getProduct(productId: any){
      
      return this.http.get("http://localhost:8086/onlineshopping/api/product/"+productId);
    }
}
