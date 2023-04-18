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
import { StadiumTimeService } from './stadium_times.service';
import { CreateStadiumTimeDto } from './dto/create-stadium_time.dto';
import { UpdateStadiumTimeDto } from './dto/update-stadium_time.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { AdminAuthGuard } from '../guards/admin-auth.guards';

@ApiTags('Stadium Time')
@Controller('stadium-time')
export class StadiumTimeController {
  constructor(private readonly stadiumTimeService: StadiumTimeService) {}

  @ApiOperation({ summary: 'Create a StadiumTime' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Post()
  createStadiumTime(@Body() createStadiumTimeDto: CreateStadiumTimeDto) {
    return this.stadiumTimeService.createStadiumTime(createStadiumTimeDto);
  }

  @ApiOperation({ summary: 'Get all StadiumTime' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllStadiumTimes() {
    return this.stadiumTimeService.getAllStadiumTimes();
  }

  @ApiOperation({ summary: 'Get StadiumTime' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getStadiumTimeById(@Param('id') id: number) {
    return this.stadiumTimeService.getStadiumTimeById(+id);
  }

  @ApiOperation({ summary: 'Update StadiumTime' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Put(':id')
  async updateStadiumTime(
    @Param('id') id: number,
    @Body() updateStadiumTimeDto: UpdateStadiumTimeDto,
  ) {
    return await this.stadiumTimeService.updateStadiumTime(
      +id,
      updateStadiumTimeDto,
    );
  }

  @ApiOperation({ summary: 'Delete user' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async deleteStadiumTime(@Param('id') id: number): Promise<number> {
    return await this.stadiumTimeService.deleteStadiumTime(id);
  }
}
