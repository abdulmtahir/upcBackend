import { PartialType } from '@nestjs/mapped-types';
import { CreateQuickContactDto } from './create-quick-contact.dto';

export class UpdateQuickContactDto extends PartialType(CreateQuickContactDto) {}
