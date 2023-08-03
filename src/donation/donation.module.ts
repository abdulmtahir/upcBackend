import { Module } from '@nestjs/common';
import { DonationController } from './donation.controller';
import { DonationService } from './donation.service';
import { DonationEntity } from './entity/donation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DonationEntity])],
  controllers: [DonationController],
  providers: [DonationService]
})
export class DonationModule {}
