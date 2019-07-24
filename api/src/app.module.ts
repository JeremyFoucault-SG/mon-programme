import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './user/user.module';
import { TrainingModule } from './training/training.module';
import { ArticleModule } from './article/article.module';
import { ItemModule } from './item/item.module';
import { PromoModule } from './promo/promo.module';
import { DbModule } from './db/db.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [AuthenticationModule, UserModule, TrainingModule, ArticleModule, ItemModule, PromoModule, DbModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
