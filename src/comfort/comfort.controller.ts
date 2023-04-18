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
import { ComfortService } from './comfort.service';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { AdminAuthGuard } from '../guards/admin-auth.guards';

@ApiTags('Comfort')
@Controller('comfort')
export class ComfortController {
  constructor(private readonly comfortService: ComfortService) {}

  @ApiOperation({ summary: 'Create a Comfort' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Post()
  createComfort(@Body() createComfortDto: CreateComfortDto) {
    return this.comfortService.createComfort(createComfortDto);
  }

  @ApiOperation({ summary: 'Get all Comfort' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllComforts() {
    return this.comfortService.getAllComforts();
  }

  @ApiOperation({ summary: 'Get Comfort' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getComfortById(@Param('id') id: number) {
    return this.comfortService.getComfortById(+id);
  }

  @ApiOperation({ summary: 'Update Comfort' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Put(':id')
  async updateComfort(
    @Param('id') id: number,
    @Body() updateComfortDto: UpdateComfortDto,
  ) {
    return await this.comfortService.updateComfort(+id, updateComfortDto);
  }

  @ApiOperation({ summary: 'Delete Comfort' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async deleteComfort(@Param('id') id: number): Promise<number> {
    return await this.comfortService.deleteComfort(id);
  }
}
