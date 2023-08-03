
import { Body, Controller, Post, Get, Param, Put, UseGuards } from '@nestjs/common';
import { BlogService } from './blog.service';
import { createBlogDto } from './dto/createBlogDto';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { Role } from 'src/register-admin/role.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';
@Controller('blog')
export class BlogController {

    constructor(private readonly BlogService: BlogService){}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
    @Post()
    createBlog(@Body() createBlogDto: createBlogDto){
        return this.BlogService.createBlog(createBlogDto);
    }
    
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
    @Get()
    getBlog(){
        return this.BlogService.getAllBlogCategory();
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
    @Put(':id')
    updateBlog(@Param('id') id:number, @Body() createBlogDto: createBlogDto){
        return this.BlogService.updateBlogCategory(id, createBlogDto);
    }
}
