import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { CommandsModalPage } from '../commands-modal/commands-modal.page';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.page.html',
  styleUrls: ['./monitoring.page.scss'],
})
export class MonitoringPage implements OnInit {

  constructor(private modalController:ModalController , private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  dateChanged(){
    console.log();  
  }

 public async openPicker(){
    const modal = await this.modalController.create({
      component: CommandsModalPage,
      showBackdrop: true,
      backdropDismiss: true,
      cssClass: 'modal-class',
      animated: true

    })
     await modal.present();

     const { role } = await modal.onWillDismiss();
     
     if(role === 'closed'){
      const alert = await this.alertCtrl.create({header : 'Susccess', message : 'Succcesssssss', buttons: ['Okey']})
      await alert.present()
     }
  }

  // openPicker(){
  //   const modal = modalController.create({
  //     component: 'app-modal',
  //     swipeToClose : true,
  //     presentingElement : modalController.getTop()
  //   })
  //   modal.present()
  // }
}
