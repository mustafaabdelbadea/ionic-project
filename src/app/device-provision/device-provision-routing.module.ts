import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceProvisionPage } from './device-provision.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceProvisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceProvisionPageRoutingModule {}
