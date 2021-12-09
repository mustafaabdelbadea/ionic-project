import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandsModalPageRoutingModule } from './commands-modal-routing.module';

import { CommandsModalPage } from './commands-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandsModalPageRoutingModule
  ],
  declarations: [CommandsModalPage]
})
export class CommandsModalPageModule {}
