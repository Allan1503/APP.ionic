
import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal: IonModal | undefined;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string | undefined;
  info: string | undefined;
  address: string | undefined;

  cancel() {
    this?.modal?.dismiss(null, 'cancel');
  }

  confirm() {
    const data = {
      name: this.name,
      address: this.address,
      info: this.info,
    }
    console.log(data)
    this?.modal?.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}