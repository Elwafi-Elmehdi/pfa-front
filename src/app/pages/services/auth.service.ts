import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoginResult } from '../models/login-result';
import { User } from '../models/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService) {
    this.user = new User();
  }
  private readonly url: string = `${environment.url}/token`;
  private user: User;
  private access_token: string | null = null;
  private refresh_token: string | null = null;

  public login(user: User) {
    return this.http.post<LoginResult>(this.url, user);
  }
  public setLocalStorage(res: LoginResult) {
    this.storageService.set('access_token', res.access_token);
    this.storageService.set('refresh_token', res.refresh_token);
  }

  public clearLocalStorage() {
    this.storageService.remove('access_token');
    this.storageService.remove('refresh_token');
  }

  private getTokenRemainingTime() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      return 0;
    }
    const jwtToken = JSON.parse(atob(accessToken.split('.')[1]));
    const expires = new Date(jwtToken.exp * 1000);
    return expires.getTime() - Date.now();
  }

}
