// donation.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { DonationService } from './donation.service';
import { DonationDto } from './dto/donation.dto';
import { DonationEntity } from './entity/donation.entity';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/register-admin/role.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('donations')
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Post()
  createDonation(@Body() donationDto: DonationDto): Promise<DonationEntity> {
    return this.donationService.createDonation(donationDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Get()
  getAllDonations(): Promise<DonationEntity[]> {
    return this.donationService.getAllDonations();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Get(':id')
  getDonationById(@Param('id') id: number): Promise<DonationEntity> {
    return this.donationService.getDonationById(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Put(':id')
  updateDonation(@Param('id') id: number, @Body() donationDto: DonationDto): Promise<DonationEntity> {
    return this.donationService.updateDonation(id, donationDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Delete(':id')
  deleteDonation(@Param('id') id: number): Promise<void> {
    return this.donationService.deleteDonation(id);
  }
}
