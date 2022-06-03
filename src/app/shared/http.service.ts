import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from '../constant/url';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private baseUrl = Url.baseUrl

    constructor(
        private http: HttpClient,

    ) {
    }


    post<T>(url: any, data: any) {

        return this.http.post(this.baseUrl + url, data);
    }

    put<T>(url: any, data: any, loader = true) {

        return this.http.put(this.baseUrl + url, data);
    }

    patch<T>(url: any, data: any, loader = true) {

        return this.http.patch(this.baseUrl + url, data);
    }

    get<T>(url: any, httpParams?: any, loader = true) {



        return this.http.get(this.baseUrl + url);
    }

    delete<T>(url: any, httpParams?: any, loader = true) {


        return this.http.delete(this.baseUrl + url);
    }
}
