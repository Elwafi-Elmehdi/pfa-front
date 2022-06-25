import { NgModule } from '@angular/core';
import { NbButton, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbMenuModule, NbTagModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { DevicesComponent } from './devices/devices.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbTagModule
  ],
  declarations: [
    PagesComponent,
    DevicesComponent,
  ],
})
export class PagesModule {
}
