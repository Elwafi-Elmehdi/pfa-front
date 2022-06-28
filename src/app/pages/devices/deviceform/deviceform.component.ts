import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-deviceform',
  templateUrl: './deviceform.component.html',
  styleUrls: ['./deviceform.component.scss']
})
export class DeviceformComponent implements OnInit {

  constructor(protected dialogService: NbDialogRef<any>,) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogService.close();
  }

}
