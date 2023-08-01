import { Injectable } from '@nestjs/common';
import { CreateQuickContactDto } from './dto/create-quick-contact.dto';
import { UpdateQuickContactDto } from './dto/update-quick-contact.dto';

@Injectable()
export class QuickContactService {
  create(createQuickContactDto: CreateQuickContactDto) {
    return 'This action adds a new quickContact';
  }

  findAll() {
    return `This action returns all quickContact`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quickContact`;
  }

  update(id: number, updateQuickContactDto: UpdateQuickContactDto) {
    return `This action updates a #${id} quickContact`;
  }

  remove(id: number) {
    return `This action removes a #${id} quickContact`;
  }
}
