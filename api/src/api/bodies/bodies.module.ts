import { Module } from '@nestjs/common';
import { BodiesController } from './bodies.controller';
import { BodiesService } from './bodies.service';

@Module({
  controllers: [BodiesController],
  providers: [BodiesService]
})
export class BodiesModule {}
