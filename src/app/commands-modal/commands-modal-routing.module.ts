import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandsModalPage } from './commands-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CommandsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandsModalPageRoutingModule {}
