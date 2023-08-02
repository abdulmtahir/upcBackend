import { Injectable } from '@nestjs/common';
import { createBlogDto } from './dto/createBlogDto';
import { InjectRepository } from '@nestjs/typeorm';
import { createBlog } from 'src/entities/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {

    constructor(@InjectRepository(createBlog) private readonly createB: Repository<createBlog>,){}


    async createBlog(createBlogDto: createBlogDto){

        const cBlog =  this.createB.create(createBlogDto);
        return this.createB.save(cBlog);
    }
}
