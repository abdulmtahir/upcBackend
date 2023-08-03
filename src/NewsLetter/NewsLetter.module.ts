import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from './entity/News.entity';
import { NewsController } from './NewsLetter.controller';
import { NewsService } from './NewsLetter.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports: [TypeOrmModule.forFeature([News])],
  exports: [NewsService],
})
export class NewsModule {}
