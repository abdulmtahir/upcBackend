
import { Body, Controller, Post, Get, Param, Put } from '@nestjs/common';
import { BlogService } from './blog.service';
import { createBlogDto } from './dto/createBlogDto';
@Controller('blog')
export class BlogController {

    constructor(private readonly BlogService: BlogService){}

    @Post()
    createBlog(@Body() createBlogDto: createBlogDto){
        return this.BlogService.createBlog(createBlogDto);
    }
    
    @Get()
    getBlog(){
        return this.BlogService.getAllBlogCategory();
    }

    @Put(':id')
    updateBlog(@Param('id') id:number, @Body() createBlogDto: createBlogDto){
        return this.BlogService.updateBlogCategory(id, createBlogDto);
    }
}
