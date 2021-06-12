import { Injectable, HttpException, HttpService } from '@nestjs/common';
import { SubscriptionCreateDto } from './SubscriptionCreate.dto';
import { SubscriptionDto } from './subscruption.model';
import { AxiosResponse } from 'axios';

@Injectable()
export class SubscriptionService {

    constructor(private httpService: HttpService) {}

    async createSubscription(
        subscription: SubscriptionCreateDto,
    ): Promise<SubscriptionDto> {
        try {
            const res: AxiosResponse<any> = await this.httpService
                .post(process.env.SERVICE_URL || 'http://localhost:5000/subscriptions', subscription, {
                headers: { 'Type': 'app/json' },
                })
                .toPromise();
            return res.data;
        } catch (error) {
            throw new HttpException('Subscription could not be compleate', error.res.status);
            }
    }

    async getAllSubscriptions(): Promise<SubscriptionDto[]> {
        try {
            const res: AxiosResponse<any> = await this.httpService
            .get(process.env.SERVICE_URL || 'http://localhost:5000/subscriptions')
            .toPromise();
    
            return res.data;
        } catch (error) {
            throw new HttpException('Subscriptions could not be retrived', error.res.status);
        }
    }


    async getOneSubscription(id: string): Promise<SubscriptionDto>{
        try {
            const response: AxiosResponse<any> = await this.httpService
                .get(`${process.env.SERVICE_URL}/${id}` || `http://localhost:5000/${id}`)
                .toPromise();
                return response.data;
            } catch (error) {
            throw new HttpException(`Subscription ${id} could not be found`, error.response.status);
            }
    }

    async DeleteSubscription(id: string): Promise<SubscriptionDto> {
        try {
            const res: AxiosResponse<any> = await this.httpService
            .delete(`${process.env.SERVICE_URL}/${id}` || `http://localhost:5000/${id}`)
            .toPromise();
    
            return res.data;
        } catch (error) {
            throw new HttpException('Could not delete subscription', error.res.status);
        }
    }
}

