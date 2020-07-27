import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.scss'],
})
export class HeaderModalComponent implements OnInit {
  @Input() title: string;
  @Input() closeButton = 'true';
  @Input() menuButton = 'false';
  @Input() cartButton = 'false';
  @Input() details = false;
  @Input() search = false;
  @Input() placeholder = 'Buscar';
  @Input() countCart = 0;
  @Output() messageEvent = new EventEmitter<string>();
  @Output() goCart = new EventEmitter<boolean>();
  @Output() closeModal = new EventEmitter<boolean>();

  constructor(
      private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  async close() {
    const modal = await this.modalCtrl.getTop();
    if (modal) {
      this.closeModal.emit(true);
      modal.dismiss().then();
    }
  }

  filterList(event) {
    this.messageEvent.emit(event.target.value);
  }

  public async onGoCart() {
    this.goCart.emit(true);
  }
}
