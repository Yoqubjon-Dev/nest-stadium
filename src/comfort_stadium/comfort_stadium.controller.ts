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
import { ComfortStadiumService } from './comfort_stadium.service';
import { CreateComfortStadiumDto } from './dto/create-comfort_stadium.dto';
import { UpdateComfortStadiumDto } from './dto/update-comfort_stadium.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { AdminAuthGuard } from '../guards/admin-auth.guards';

@ApiTags('Comfort Stadium')
@Controller('comfort-stadium')
export class ComfortStadiumController {
  constructor(private readonly comfortStadiumService: ComfortStadiumService) {}

  @ApiOperation({ summary: 'Create a ComfortStadium' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Post()
  createComfortStadium(
    @Body() createComfortStadiumDto: CreateComfortStadiumDto,
  ) {
    return this.comfortStadiumService.createComfortStadium(
      createComfortStadiumDto,
    );
  }

  @ApiOperation({ summary: 'Get all ComfortStadium' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllComfortStadiums() {
    return this.comfortStadiumService.getAllComfortStadiums();
  }

  @ApiOperation({ summary: 'Get ComfortStadium' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getComfortStadiumById(@Param('id') id: number) {
    return this.comfortStadiumService.getComfortStadiumById(+id);
  }

  @ApiOperation({ summary: 'Update ComfortStadium' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Put(':id')
  async updateComfortStadium(
    @Param('id') id: number,
    @Body() updateComfortStadiumDto: UpdateComfortStadiumDto,
  ) {
    return await this.comfortStadiumService.updateComfortStadium(
      +id,
      updateComfortStadiumDto,
    );
  }

  @ApiOperation({ summary: 'Delete user' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async deleteComfortStadium(@Param('id') id: number): Promise<number> {
    return await this.comfortStadiumService.deleteComfortStadium(id);
  }
}
