// membership.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { MemberShipDto } from './dto/membership.dto';
import { MembershipEntity } from './entity/membership.entity';


@Controller('memberships') 
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Post()
  createMembership(@Body() membershipDto: MemberShipDto): Promise<MembershipEntity> {
    return this.membershipService.createMembership(membershipDto);
  }

  @Get()
  getAllMemberships(): Promise<MembershipEntity[]> {
    return this.membershipService.getAllMemberships();
  }

  @Get(':id')
  getMembershipById(@Param('id') id: number): Promise<MembershipEntity> {
    return this.membershipService.getMembershipById(id);
  }

  @Put(':id')
  updateMembership(@Param('id') id: number, @Body() membershipDto: MemberShipDto): Promise<MembershipEntity> {
    return this.membershipService.updateMembership(id, membershipDto);
  }

  @Delete(':id')
  deleteMembership(@Param('id') id: number): Promise<void> {
    return this.membershipService.deleteMembership(id);
  }
}
