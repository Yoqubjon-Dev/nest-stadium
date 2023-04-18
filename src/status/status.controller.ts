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
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { AdminAuthGuard } from '../guards/admin-auth.guards';

@ApiTags('Status')
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @ApiOperation({ summary: 'Create a Status' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Post()
  createStatus(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.createStatus(createStatusDto);
  }

  @ApiOperation({ summary: 'Get all Status' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllStatuss() {
    return this.statusService.getAllStatuss();
  }

  @ApiOperation({ summary: 'Get Status' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getStatusById(@Param('id') id: number) {
    return this.statusService.getStatusById(+id);
  }

  @ApiOperation({ summary: 'Update Status' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Put(':id')
  async updateStatus(
    @Param('id') id: number,
    @Body() updateStatusDto: UpdateStatusDto,
  ) {
    return await this.statusService.updateStatus(+id, updateStatusDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async deleteStatus(@Param('id') id: number): Promise<number> {
    return await this.statusService.deleteStatus(id);
  }
}
