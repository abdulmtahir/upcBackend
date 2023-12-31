import { Injectable, NotFoundException } from '@nestjs/common';
import { createBlogDto } from './dto/createBlogDto';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogEntity } from 'src/entities/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {

    constructor(@InjectRepository(BlogEntity) private readonly createB: Repository<BlogEntity>,){}

    // method create a new Blog categor
    async createBlog(createBlogDto: createBlogDto){

        const cBlog =  this.createB.create(createBlogDto);
        return this.createB.save(cBlog);
    }

    // method to fetch all the category
    async getAllBlogCategory(){
        const blogCategory = await this.createB.find();
        
        try{
            return blogCategory
        }catch(console){
            return new NotFoundException('No data yet');
        }
        
    }

    // method to update Blog category

    async updateBlogCategory(id: number, createBlogDto: createBlogDto){
        const blogCategoryToUpdate = await this.createB.update(id, createBlogDto);
       
        if(blogCategoryToUpdate.affected !=0){
            return blogCategoryToUpdate;
        }else{
            return  'cant update this row';
        }
        
    }

    async getBlogId(id:number){
        const blogId = await this.createB.findOne({where:{id}})
        return blogId.id;
    }
}
