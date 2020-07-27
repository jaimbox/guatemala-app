import { Component, OnInit } from '@angular/core';
import { PromotionModel } from 'src/app/shared/models/Promotion';
import Promotion = PromotionModel.Promotion;

@Component({
  selector: 'app-promotion-details',
  templateUrl: './promotion-details.page.html',
  styleUrls: ['./promotion-details.page.scss'],
})
export class PromotionDetailsPage implements OnInit {
  promotion: Promotion;
  constructor() { }

  ngOnInit() {}

}
