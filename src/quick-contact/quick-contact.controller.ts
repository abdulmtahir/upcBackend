import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuickContactService } from './quick-contact.service';
import { CreateQuickContactDto } from './dto/create-quick-contact.dto';
import { UpdateQuickContactDto } from './dto/update-quick-contact.dto';

@Controller('quick-contact')
export class QuickContactController {
  constructor(private readonly quickContactService: QuickContactService) {}

  @Post()
  create(@Body() createQuickContactDto: CreateQuickContactDto) {
    return this.quickContactService.create(createQuickContactDto);
  }

  @Get()
  findAll() {
    return this.quickContactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quickContactService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuickContactDto: UpdateQuickContactDto) {
    return this.quickContactService.update(+id, updateQuickContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quickContactService.remove(+id);
  }
}
