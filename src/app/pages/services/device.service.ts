import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Device } from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  private readonly url: string = `${environment.url}/devices`;
  private device: Device | null;
  private devices: Device[] | null;

  public loadAll() {
    this.http.get<Device[]>(this.url + '/').subscribe(res => {
      this.devices = res;
    });
  }

  public getDeviceById(id: number) {
    this.http.get<Device>(this.url + `/${id}/`).subscribe(res => {
      this.devices = [res];
    })
  }
  public saveDevice(device: Device) {
    if (device !== null) {
      this.http.post<Device>(this.url + '/', device).subscribe(res => {
        this.loadAll();
      })
    }
  }
  public deleteDeviceById(id: number) {
    if (id !== null && id <= 0) {
      this.http.delete(this.url + `/${id}/`).subscribe(res => {
        this.loadAll();
      })
    }
  }
  public updateDeviceById(id: number, device: Device) {
    if (id !== null && id <= 0 && device !== null) {
      this.http.put(this.url + `/${id}/`, device).subscribe(res => {
        this.loadAll();
      })
    }
  }

}
