import {Request} from 'src/app/shared/models/Request';

export namespace PromotionModel {
    export interface Promotion {
        id: number;
        title: string;
        price: number;
        address: string;
        latitude: number;
        longitude: number;
        created_at: Date;
        updated_at: Date;
    }

    export interface PromotionResponse extends Request.Success{
        data: Array<Promotion>;
    }

    export interface PromotionSingleResponse extends Request.Success{
        data: Promotion;
    }
}
