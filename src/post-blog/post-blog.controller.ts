import { Body, Controller, Get, NotFoundException, Post, Param, Put, Delete } from '@nestjs/common';
import { PostBlogService } from './post-blog.service';
import { BlogService } from 'src/blog/blog.service';
import { postBlogDto } from './dto/postBlogDto';



@Controller('post-blog')
export class PostBlogController {

    constructor(private readonly postService: PostBlogService, private readonly blogService: BlogService ){}


    @Post()
    async createPost(@Body() postBlogDto: postBlogDto){
        const blogId = await this.blogService.getBlogId(postBlogDto.id);

        if(!blogId){
            throw new NotFoundException ('the category not found');

        }
        return  this.postService.createPost(blogId, postBlogDto);


    }

    @Get(':id')
    getPostById(@Param('id') id:number){

        return this.postService.getPostById(id);
    }

    @Get()
    getAllPost(){
        return this.postService.getAllPost();
    }

    @Put(':id')
    updatePostById(@Param('id') id:number,@Body() postDto: postBlogDto){
        return this.postService.updatePostById(id, postDto)
    }

    @Delete(':id')
    deletePostById(@Param('id') id: number){
        this.postService.deletePostById(id)  
    }


    
}
