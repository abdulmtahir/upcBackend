import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MembershipModule } from './membership/membership.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembershipEntity } from './membership/entity/membership.entity';
import { AuthModule } from './auth/auth.module';
import { QuickContactModule } from './quick-contact/quick-contact.module';
import { GalleryModule } from './gallery/gallery.module';
import { RegisterAdminModule } from './register-admin/register-admin.module';
import { PostBlogModule } from './post-blog/post-blog.module';
import { NewsModule } from './NewsLetter/NewsLetter.module';
import { BlogModule } from './blog/blog.module';
import { DonationModule } from './donation/donation.module';
import { EventModule } from './event/event.module';
import { DonationEntity } from './donation/entity/donation.entity';
import { BlogEntity } from './entities/blog.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: +configService.get<number>('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        entities: [
          MembershipEntity,
          DonationEntity,
          BlogEntity,
        ],
        autoLoadEntities: true,
        synchronize: true,
      }), 
      inject: [ConfigService],
    }),
    MembershipModule, AuthModule, QuickContactModule, GalleryModule, RegisterAdminModule,PostBlogModule, NewsModule, BlogModule, DonationModule, EventModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
