import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpService } from '../shared/http.service';
import { Url } from '../constant/url';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor(private http: HttpClient,private https:HttpService) { }
  onLogin(data: any) {
    return this.https.post(Url.loginUrl, data)
  }
  getToken() {
    return localStorage.getItem('Token')
  }
  getUserRole() {
    return localStorage.getItem('userRole')
  }
}
