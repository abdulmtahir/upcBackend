import { Module } from '@nestjs/common';
import { QuickContactService } from './quick-contact.service';
import { QuickContactController } from './quick-contact.controller';

@Module({
  controllers: [QuickContactController],
  providers: [QuickContactService]
})
export class QuickContactModule {}
