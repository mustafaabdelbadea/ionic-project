import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Tab4Page implements OnInit {
  rootPage: any;

  constructor(
    public toastController: ToastController,
    private renderer: Renderer2
  ) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000,
    });
    toast.present();
  }

  onToggleColorTheme(event) {
    console.log(event);
    if (event.detail.checked) {
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
    } else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
    }
  }

  onImagePick() {
    Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt,
    });
  }

  ngOnInit() {}
}
