
import { Body, Controller, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { createBlogDto } from './dto/createBlogDto';
@Controller('blog')
export class BlogController {

    constructor(private readonly BlogService: BlogService){}

    @Post('create')
    createBlog(@Body() createBlogDto: createBlogDto){
        return this.BlogService.createBlog(createBlogDto);
    }

}
