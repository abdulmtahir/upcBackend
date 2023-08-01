import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { NewsModule } from './NewsLetter/NewsLetter.module';
import { QuickContactModule } from './quick-contact/quick-contact.module';

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
          entities: [NewsModule],
          synchronize: true,
        }),
        inject: [ConfigService],
      }), 
    NewsModule, QuickContactModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
