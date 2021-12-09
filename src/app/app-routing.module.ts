import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./password-settings/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'edit-name',
    loadChildren: () => import('./password-settings/edit-name/edit-name.module').then( m => m.EditNamePageModule)
  },
  {
    path: 'device-list',
    loadChildren: () => import('./device-list/device-list.module').then( m => m.DeviceListPageModule)
  },
  {
    path: 'users-list',
    loadChildren: () => import('./users-list/users-list.module').then( m => m.UsersListPageModule)
  },
  {
    path: 'commands-modal',
    loadChildren: () => import('./commands-modal/commands-modal.module').then( m => m.CommandsModalPageModule)
  },
  {
    path: 'device-provision',
    loadChildren: () => import('./device-provision/device-provision.module').then( m => m.DeviceProvisionPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
