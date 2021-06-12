import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { SubscriptionDto } from './subscruption.model';
import { SubscriptionService } from './subscription.service';

@Controller('subscription')
export class SubscriptionController {

    constructor(private subscriptionService: SubscriptionService){}

    //GET ALL SUBSCRIPTION
    @Get()
    @ApiResponse({description: 'Finds all Subscriptions'})
    async getAllSubscriptions():Promise<SubscriptionDto[]>{
            return await this.subscriptionService.getAllSubscriptions()
    }

    //CREATE A NEW SUBSCRIPTION
    @Post()
    @ApiResponse({description: 'Creates a new subscription'})
    async createNewSubscription(
        @Body() subscription: SubscriptionDto,
            ): Promise<SubscriptionDto> {
        return await this.subscriptionService.createSubscription(subscription);
        }

    //FIND ONE EMAIL BY ID
    @Get('/:id')
    @ApiResponse({description: 'Finds one subscription by its Id'})
    async getSubscriptionById(@Param('id') id: string): Promise<SubscriptionDto> {
        return await this.subscriptionService.getOneSubscription(id);
    }

        //DELETE ONE SUBSCRIPTION
        @Delete('/:id')
        @ApiResponse({description: 'Deletes one subscription by its Id'})
        async deleteOneSubscription(@Param('id') id: string): Promise<SubscriptionDto> {
            return await this.subscriptionService.deleteSubscription(id)
        } 
}
