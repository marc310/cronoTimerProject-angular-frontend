import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    apiDomain = `${environment.domain}`;
    productInfoApi = 'item-info?request_by=web';
    categoryApi = 'restaurant-info?restaurant_id=';
    createOrderApi = 'guest/create-order';
    addItemToCartApi = 'guest/cart/add';
    changeCartItemQuantityApi = 'guest/cart/change-quantity';
    updateItemApi = 'guest/cart/update-item';
    removeItemApi = 'guest/cart/remove';
    emptyCartApi = 'guest/cart/empty';

    category: any[];
    products: any[];
    product: any[];

    currency: any[] = [{
        symbol: '$',
        name: 'US Dollar',
        shortname: 'USD'
    }];

    allergies: any[] = [
        {id: 1, name: 'Sauce'},
        {id: 2, name: 'Egg'},
        {id: 3, name: 'Gluten'},
        {id: 4, name: 'Peanut'},
        {id: 5, name: 'Dairy'},
        {id: 6, name: 'Wheat'},
        {id: 7, name: 'Tree Nut'},
        {id: 8, name: 'Fish'}

    ];

    takeout: any[] = [
        {id: 1, name: 'Dine In', icon: 'dining', checked: ''},
        {id: 2, name: 'Take Out', icon: 'local_mall', checked: 'checked'},
    ];

    payMethod: any[] = [
        {
            id: 1,
            name: 'Cash',
            description: 'Pay at the register',
            icon: 'local_atm',
            link: 'payment/preparing/processing/done/processing',
            checked: 'checked'
        },
        {
            id: 2,
            name: 'Gift Card',
            description: 'Pay with your Gift Card',
            icon: 'card_giftcard',
            link: 'promocode',
            checked: ''
        },
        {
            id: 3,
            name: 'Credit / Debit',
            description: 'Swipe, insert or tap below',
            icon: 'payment',
            link: 'tap_to_pay',
            checked: ''
        },
    ];

    constructor(private http: HttpClient) {
    }

    public getCurrency() {
        return this.currency;
    }

    public getAllergies() {
        return this.allergies;
    }

    public getProduct(slug) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept-Language': localStorage.getItem('browserLanguage')
            })
        };
        return this.http.get<any>(`${this.apiDomain}${this.productInfoApi}&item_id=${slug}`, httpOptions).pipe(map(product => {
            return product;
        }));
    }

    public getProducts(restaurantId) {
        // return this.products;
        // console.log('here');
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept-Language': localStorage.getItem('browserLanguage'),
            })
        };
        return this.http.get<any>(`${this.apiDomain}${this.categoryApi}${restaurantId}`, httpOptions).pipe(map(products => {
            return products;
        }));

    }

    public getTakeOut() {
        return this.takeout;
    }

    getCategory(restaurantId) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept-Language': localStorage.getItem('browserLanguage'),
            })
        };
        return this.http.get<any>(`${this.apiDomain}${this.categoryApi}${restaurantId}`, httpOptions).pipe(map(category => {
            return category;
        }));
    }

    createOrder(body) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept-Language': localStorage.getItem('browserLanguage'),
            })
        };
        return this.http.post<any>(`${this.apiDomain}${this.createOrderApi}`, body, httpOptions).pipe(map(data => {
            return data;
        }));
    }

    addItemToCart(body) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept-Language': localStorage.getItem('browserLanguage'),
            })
        };
        return this.http.post<any>(`${this.apiDomain}${this.addItemToCartApi}`, body, httpOptions).pipe(map(data => {
            // console.log(data);
            return data;
        }));
    }

    changeCartItemQuantity(body) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept-Language': localStorage.getItem('browserLanguage'),
            })
        };
        return this.http.post<any>(`${this.apiDomain}${this.changeCartItemQuantityApi}`, body, httpOptions).pipe(map(data => {
            // console.log(data);
            return data;
        }));
    }

    updateItem(body) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept-Language': localStorage.getItem('browserLanguage'),
            })
        };
        return this.http.post<any>(`${this.apiDomain}${this.updateItemApi}`, body, httpOptions).pipe(map(data => {
            // console.log(data);
            return data;
        }));
    }

    removeItem(body) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept-Language': localStorage.getItem('browserLanguage'),
            })
        };
        return this.http.post<any>(`${this.apiDomain}${this.removeItemApi}`, body, httpOptions).pipe(map(data => {
            // console.log(data);
            return data;
        }));
    }

    emptyCart(body) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept-Language': localStorage.getItem('browserLanguage'),
            })
        };
        return this.http.post<any>(`${this.apiDomain}${this.emptyCartApi}`, body, httpOptions).pipe(map(data => {
            // console.log(data);
            // console.log('Empty Cart');
            return data;
        }));
    }

    public getPayMethod() {
        return this.payMethod;
    }

}
