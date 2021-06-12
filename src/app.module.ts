import {
  HttpModule,
  MiddlewareConsumer,
  Module,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscriptionModule } from './subscription/subscription.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule,
            ConfigModule.forRoot({ envFilePath: `http://localhost:5000` }),
            SubscriptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
