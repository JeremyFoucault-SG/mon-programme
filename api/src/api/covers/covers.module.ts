import { Module } from '@nestjs/common';
import { CoversController } from './covers.controller';
import { CoversService } from './covers.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { CoverModel } from './cover.model';

@Module({
  imports: [
    TypegooseModule.forFeature(
      [{
        typegooseClass: CoverModel,
        schemaOptions: {
          collection: 'covers',
        },
      }]),
  ],
  controllers: [CoversController],
  providers: [CoversService],
})
export class CoversModule { }
