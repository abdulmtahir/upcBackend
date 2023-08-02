import { Injectable, NotFoundException } from '@nestjs/common';
import { createBlogDto } from './dto/createBlogDto';
import { InjectRepository } from '@nestjs/typeorm';
import { createBlog } from 'src/entities/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {

    constructor(@InjectRepository(createBlog) private readonly createB: Repository<createBlog>,){}

    // method create a new Blog categor
    async createBlog(createBlogDto: createBlogDto){

        const cBlog =  this.createB.create(createBlogDto);
        return this.createB.save(cBlog);
    }

    // method to fetch all the category
    async getAllBlogCategory(){
        const blogCategory = this.createB.find();
        
        try{
            return blogCategory
        }catch(console){
            return new NotFoundException('No data yet');
        }
        
    }

    // method to update Blog category

    async updateBlogCategory(id: number, createBlogDto: createBlogDto){
        const blogCategoryToUpdate = this.createB.findOne({where:{id}});
        
        if(blogCategoryToUpdate){
           return Object.assign(blogCategoryToUpdate, createBlogDto);
        }else{
            return Error ('cant update ' + blogCategoryToUpdate);
        }
        
    }
}
