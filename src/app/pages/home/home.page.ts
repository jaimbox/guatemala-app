import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/shared/services/promotion.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { PromotionModel } from 'src/app/shared/models/Promotion';
import { ModalController } from '@ionic/angular';
import { PromotionDetailsPage } from 'src/app/pages/promotion-details/promotion-details.page';
import Promotion = PromotionModel.Promotion;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  promotions: Promotion[] = [];
  pageNumber = 1;
  pageLimit = 1;

  constructor(private promotionService: PromotionService,
              private spinner: NgxSpinnerService,
              private modalCtrl: ModalController) {}

  async ngOnInit() {
    await this.spinner.show();

    this.getPromotions(false, '');
  }

  getPromotions(isFirstLoad, event) {
    // Endpoint is called to show all promotions
    this.promotionService.getList(this.pageNumber).subscribe(async (response) => {
      if (response.status_code === 200) {
        response.result.data.forEach((item) => {
          this.promotions.push(item);
        });

        this.pageNumber = response.result.pagination.current_page;
        this.pageLimit = response.result.pagination.total_pages;

        if (isFirstLoad) {
          event.target.complete();
        }

        this.pageNumber += 1;
      }
      await this.spinner.hide();
    }, (error  => this.spinner.hide()));
  }

  doInfinite(event) {
    setTimeout(() => {
      this.getPromotions(true, event);
    }, 500);
  }

  async showDetails(id: number) {
    await this.spinner.show();

    // Endpoint is called to display a promotion
    this.promotionService.getPromotionDetail(id).subscribe(async (response) => {
      if (response.status_code === 200) {
        const promotion = response.result;

        const modal = await this.modalCtrl.create({
          component: PromotionDetailsPage,
          cssClass: 'item-order-detail',
          backdropDismiss: false,
          keyboardClose: false,
          showBackdrop: false,
          componentProps: { promotion }
        });

        return await modal.present()
            .then(() => this.spinner.hide())
            .catch(() => this.spinner.hide());
      } else {
        this.spinner.hide();
      }
    }, (error  => this.spinner.hide()));
  }
}
