import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterAdminModule } from './register-admin/register-admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './blog/blog.module';
import config from 'ormconfig';

@Module({
  imports: [RegisterAdminModule, TypeOrmModule.forRoot(config), BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
