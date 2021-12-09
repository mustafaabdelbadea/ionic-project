import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-commands-modal',
  templateUrl: './commands-modal.page.html',
  styleUrls: ['./commands-modal.page.scss'],
})
export class CommandsModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalCtrl.dismiss()
  }

  closeBtn(){
    this.modalCtrl.dismiss(null,'closed')
    
  }
}
