import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Device } from '../../models/device';

@Component({
  selector: 'ngx-deviceform',
  templateUrl: './deviceform.component.html',
  styleUrls: ['./deviceform.component.scss']
})
export class DeviceformComponent implements OnInit {

  constructor(protected dialogService: NbDialogRef<any>,) {
    this.device = new Device();
  }

  public device: Device;
  ngOnInit(): void {
  }

  close() {
    this.dialogService.close();
  }

  save() {
    console.log(this.device);
  }

}
