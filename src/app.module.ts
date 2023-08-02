import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { NewsModule } from './NewsLetter/NewsLetter.module';
import { QuickContactModule } from './quick-contact/quick-contact.module';
import { News } from './NewsLetter/entity/News.entity';
import { QuickContact } from './quick-contact/entities/quick-contact.entity';
import { GalleryModule } from './gallery/gallery.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: +configService.get<number>('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: [News, QuickContact],
          synchronize: true,
        }),
        inject: [ConfigService],
      }), 
    NewsModule, QuickContactModule, GalleryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
