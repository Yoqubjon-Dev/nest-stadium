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
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { StadiumService } from './stadiums.service';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { AdminAuthGuard } from '../guards/admin-auth.guards';
import { UpdateStadiumDto } from './dto/update-stadium.dto';

@ApiTags('Stadium')
@Controller('stadium')
export class StadiumController {
  constructor(private readonly stadiumService: StadiumService) {}

  @ApiOperation({ summary: 'Create a stadium' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Post()
  createStadium(@Body() createStadiumDto: CreateStadiumDto) {
    console.log(createStadiumDto);
    return this.stadiumService.createStadium(createStadiumDto);
  }

  @ApiOperation({ summary: 'Get all stadium' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllStadiums() {
    return this.stadiumService.getAllStadiums();
  }

  @ApiOperation({ summary: 'Get stadium' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getStadiumById(@Param('id') id: number) {
    return this.stadiumService.getStadiumById(+id);
  }

  @ApiOperation({ summary: 'Update stadium' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Put(':id')
  async updateStadium(
    @Param('id') id: number,
    @Body() updateStadiumDto: UpdateStadiumDto,
  ) {
    return await this.stadiumService.updateStadium(+id, updateStadiumDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async deleteStadium(@Param('id') id: number): Promise<number> {
    return await this.stadiumService.deleteStadium(id);
  }
}
