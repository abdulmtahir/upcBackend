import { Module } from '@nestjs/common';
import { PostBlogController } from './post-blog.controller';
import { PostBlogService } from './post-blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from 'src/entities/postBlog.entity';
import { BlogModule } from 'src/blog/blog.module';

@Module({
  imports:[ TypeOrmModule.forFeature([Blog]), BlogModule],
  controllers: [PostBlogController],
  providers: [PostBlogService],
})
export class PostBlogModule {}
