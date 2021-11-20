import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  apiDomain = `${environment.domain}`;
  projetosApi = 'projetos/info';
  projetoInfoApi = this.projetosApi + '/id/';
  // categoryApi = 'restaurant-info?restaurant_id=';
  // createOrderApi = 'guest/create-order';
  // addItemToCartApi = 'guest/cart/add';
  // changeCartItemQuantityApi = 'guest/cart/change-quantity';
  // updateItemApi = 'guest/cart/update-item';
  // removeItemApi = 'guest/cart/remove';
  // emptyCartApi = 'guest/cart/empty';

  constructor( private http: HttpClient ) { }

  public getProjetos(){
    
  }

  // public getProduct(slug) {
  //   const httpOptions = {
  //       headers: new HttpHeaders({
  //           'Accept-Language': localStorage.getItem('browserLanguage')
  //       })
  //   };
  //   return this.http.get<any>(`${this.apiDomain}${this.productInfoApi}&item_id=${slug}`, httpOptions).pipe(map(product => {
  //       return product;
  //   }));
  // }

  // public getProducts(restaurantId) {
  //     // return this.products;
  //     // console.log('here');
  //     const httpOptions = {
  //         headers: new HttpHeaders({
  //             'Accept-Language': localStorage.getItem('browserLanguage'),
  //         })
  //     };
  //     return this.http.get<any>(`${this.apiDomain}${this.categoryApi}${restaurantId}`, httpOptions).pipe(map(products => {
  //         return products;
  //     }));
  // }
  
}
