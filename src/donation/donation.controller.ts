// donation.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DonationService } from './donation.service';
import { DonationDto } from './dto/donation.dto';
import { DonationEntity } from './entity/donation.entity';

@Controller('donations')
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Post()
  createDonation(@Body() donationDto: DonationDto): Promise<DonationEntity> {
    return this.donationService.createDonation(donationDto);
  }

  @Get()
  getAllDonations(): Promise<DonationEntity[]> {
    return this.donationService.getAllDonations();
  }

  @Get(':id')
  getDonationById(@Param('id') id: number): Promise<DonationEntity> {
    return this.donationService.getDonationById(id);
  }

  @Put(':id')
  updateDonation(@Param('id') id: number, @Body() donationDto: DonationDto): Promise<DonationEntity> {
    return this.donationService.updateDonation(id, donationDto);
  }

  @Delete(':id')
  deleteDonation(@Param('id') id: number): Promise<void> {
    return this.donationService.deleteDonation(id);
  }
}
