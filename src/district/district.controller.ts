import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { AdminAuthGuard } from '../guards/admin-auth.guards';

@ApiTags('District')
@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @ApiOperation({ summary: 'Create a district' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Post()
  createDistrict(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.createDistrict(createDistrictDto);
  }

  @ApiOperation({ summary: 'Get all district' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllDistricts() {
    return this.districtService.getAllDistricts();
  }

  @ApiOperation({ summary: 'Get district' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getDistrictById(@Param('id') id: number) {
    return this.districtService.getDistrictById(+id);
  }

  @ApiOperation({ summary: 'Update district' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Put(':id')
  async updateDistrict(
    @Param('id') id: number,
    @Body() updateDistrictDto: UpdateDistrictDto,
  ) {
    return await this.districtService.updateDistrict(+id, updateDistrictDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async deleteDistrict(@Param('id') id: number): Promise<number> {
    return await this.districtService.deleteDistrict(id);
  }
}
