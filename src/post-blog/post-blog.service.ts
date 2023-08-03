import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { postBlogDto } from './dto/postBlogDto';
import { Blog } from 'src/entities/postBlog.entity';

@Injectable()
export class PostBlogService {
    constructor(@InjectRepository(Blog) private readonly blogRe: Repository<Blog>,){}


   async createPost(id:number, postBlog: postBlogDto){

    const post = new Blog();
    post.id = id;

    const Post = this.blogRe.create(postBlog);
    return this.blogRe.save(Post);
    }


    async getPostById(id:number){
        const getById = await this.blogRe.findOne({where:{id}})

        if(!getById){
            throw new NotFoundException('cant find this Post');

        }else{
            return getById;
        }
    }

    async getAllPost(){
        const getAll = await this.blogRe.find();

        if(!getAll){
            throw new NotFoundException('the table is empty');
        }else{
            return getAll;
        }
    }

    async updatePostById(id:number, postBlog: postBlogDto){
        const updatePostById = await this.blogRe.update(id, postBlog);

        if(updatePostById.affected !=0){
            return updatePostById;
        }else{
            throw new NotFoundException('cant update this row');
        }
    }

    async deletePostById(id:number){
        try{
        await this.blogRe.delete(id);
        return ('deleted successfully');
        
        }catch(error){
            throw new NotFoundException('cant delete this post')
        }
        
        

        
    }
}
