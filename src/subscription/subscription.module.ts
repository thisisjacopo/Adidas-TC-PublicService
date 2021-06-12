import { Module, HttpModule } from '@nestjs/common';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';

@Module({
  controllers: [SubscriptionController],
  imports: [HttpModule],
  providers: [SubscriptionService]
})
export class SubscriptionModule {}
