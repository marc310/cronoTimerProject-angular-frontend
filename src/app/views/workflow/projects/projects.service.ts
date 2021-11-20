import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import { Observable } from 'rxjs';
// import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  apiDomain = `${environment.domain}`;
  projetosApi = 'api/projetos/info';
  projetoInfoApi = this.projetosApi + '/id/';

  constructor( private http: HttpClient ) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  public getProjetos() : Observable<any>{
    const data_content = this.http.get<any>(`${this.apiDomain}${this.projetosApi}`);
    return data_content
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
