import { Body, Controller, Get, NotFoundException, Post, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { PostBlogService } from './post-blog.service';
import { BlogService } from 'src/blog/blog.service';
import { postBlogDto } from './dto/postBlogDto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/register-admin/role.enum';



@Controller('post-blog')
export class PostBlogController {

    constructor(private readonly postService: PostBlogService, private readonly blogService: BlogService ){}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
    @Post()
    async createPost(@Body() postBlogDto: postBlogDto){
        const blogId = await this.blogService.getBlogId(postBlogDto.id);

        if(!blogId){
            throw new NotFoundException ('the category not found');

        }
        return  this.postService.createPost(blogId, postBlogDto);


    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
    @Get(':id')
    getPostById(@Param('id') id:number){

        return this.postService.getPostById(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
    @Get()
    getAllPost(){
        return this.postService.getAllPost();
    }

    @Put(':id')
    updatePostById(@Param('id') id:number,@Body() postDto: postBlogDto){
        return this.postService.updatePostById(id, postDto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
    @Delete(':id')
    deletePostById(@Param('id') id: number){
        this.postService.deletePostById(id)  
    }


    
}
