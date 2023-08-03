import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { NewsService } from "./NewsLetter.service";
import { CreateNewsDto } from "./dto/News-create.dto";
import { UpdateNewsDto } from "./dto/News-update.dto";


@Controller('news')
export class NewsController {
    
    constructor(private newsService: NewsService){}
    
    @Get()
    getUsers(){
        return this.newsService.get();
    }

    @Post()
    createNews(@Body() createNewsDto: CreateNewsDto) {
        return this.newsService.create(createNewsDto);
    }

     @Patch('/:newsid')
     updateUser(@Body() updateNewsDto: UpdateNewsDto, @Param('newsid', ParseIntPipe) newsId: number ) {
         return this.newsService.update(updateNewsDto, newsId);
     }

     @Get('/:newsId')
     getUser(@Param('newsId', ParseIntPipe) newsId: number){
         return this.newsService.show(newsId);
     }

     @Delete('/:newsId')
     deleteUser(@Param('newsId', ParseIntPipe) newsId: number){
         return this.newsService.delete(newsId);
     }
}
