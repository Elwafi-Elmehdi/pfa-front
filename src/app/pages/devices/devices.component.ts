import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DeviceService } from '../services/device.service';
import { DeviceformComponent } from './deviceform/deviceform.component';

@Component({
  selector: 'ngx-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  constructor(private service: DeviceService, private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }
  public delete(id: number) {

  }

  viewDevice() {

  }
  viewDeviceForm() {
    this.dialogService.open(DeviceformComponent, {
      autoFocus: true,
      context: "test",
      closeOnEsc: true
    })
  }
}
