import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createBlog } from 'src/entities/blog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([createBlog])],
  controllers: [BlogController ],
  providers: [BlogService],
  exports: [BlogService]
})
export class BlogModule {}
