import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient,
    private storageService:StorageService) {
      this.user = new User();
     }
  private readonly url:string = `${environment.url}/token`;
  private user:User;
  private access_token:string| null = null;
  private refresh_token:string| null = null;

  public login(user:User) {
    return this.http.post(this.url,user);
  }
  
}
