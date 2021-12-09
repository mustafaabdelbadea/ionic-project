import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceProvisionPageRoutingModule } from './device-provision-routing.module';

import { DeviceProvisionPage } from './device-provision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceProvisionPageRoutingModule
  ],
  declarations: [DeviceProvisionPage]
})
export class DeviceProvisionPageModule {}
