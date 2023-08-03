// membership.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { MemberShipDto } from './dto/membership.dto';
import { MembershipEntity } from './entity/membership.entity';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/register-admin/role.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { RolesGuard } from 'src/auth/guards/roles.guard';


@Controller('memberships') 
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Post()
  createMembership(@Body() membershipDto: MemberShipDto): Promise<MembershipEntity> {
    return this.membershipService.createMembership(membershipDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Get()
  getAllMemberships(): Promise<MembershipEntity[]> {
    return this.membershipService.getAllMemberships();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Get(':id')
  getMembershipById(@Param('id') id: number): Promise<MembershipEntity> {
    return this.membershipService.getMembershipById(id);
  }

  @Put(':id')
  updateMembership(@Param('id') id: number, @Body() membershipDto: MemberShipDto): Promise<MembershipEntity> {
    return this.membershipService.updateMembership(id, membershipDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.Super)
  @Delete(':id')
  deleteMembership(@Param('id') id: number): Promise<void> {
    return this.membershipService.deleteMembership(id);
  }
}
