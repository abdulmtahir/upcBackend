import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { NewsService } from "./NewsLetter.service";
import { CreateNewsDto } from "./dto/News-create.dto";
import { UpdateNewsDto } from "./dto/News-update.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt.guards";
import { RolesGuard } from "src/auth/guards/roles.guard";
import { Roles } from "src/auth/decorators/roles.decorator";
import { Role } from "src/register-admin/role.enum";


@Controller('news')
export class NewsController {
    
    constructor(private newsService: NewsService){}
    
    @Get()
    getUsers(){
        return this.newsService.get();
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
    @Post()
    createNews(@Body() createNewsDto: CreateNewsDto) {
        return this.newsService.create(createNewsDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
     @Patch('/:newsid')
     updateUser(@Body() updateNewsDto: UpdateNewsDto, @Param('newsid', ParseIntPipe) newsId: number ) {
         return this.newsService.update(updateNewsDto, newsId);
     }

     @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
     @Get('/:newsId')
     getUser(@Param('newsId', ParseIntPipe) newsId: number){
         return this.newsService.show(newsId);
     }

     @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.Super)
     @Delete('/:newsId')
     deleteUser(@Param('newsId', ParseIntPipe) newsId: number){
         return this.newsService.delete(newsId);
     }
}
