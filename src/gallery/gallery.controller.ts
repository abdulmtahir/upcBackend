import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Post()
  create(@Body() createGalleryDto: CreateGalleryDto) {
    return this.galleryService.create(createGalleryDto);
  }

  @Get()
  findAll() {
    return this.galleryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') galleryId: string) {
    return this.galleryService.show(+galleryId);
  }

  @Patch(':id')
  update(@Param('id') galleryId: number, @Body() updateGalleryDto: UpdateGalleryDto) {
    return this.galleryService.update(+galleryId, updateGalleryDto);
  }

  @Delete(':id')
  deleteUser(@Param('galleryId', ParseIntPipe) galleryId: number){
    return this.galleryService.delete(galleryId);
}
  
  
}
