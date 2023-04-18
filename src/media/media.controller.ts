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
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { AdminAuthGuard } from '../guards/admin-auth.guards';

@ApiTags('Media')
@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @ApiOperation({ summary: 'Create a Media' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Post()
  createMedia(@Body() createMediaDto: CreateMediaDto) {
    return this.mediaService.createMedia(createMediaDto);
  }

  @ApiOperation({ summary: 'Get all Media' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllMedias() {
    return this.mediaService.getAllMedias();
  }

  @ApiOperation({ summary: 'Get Media' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getMediaById(@Param('id') id: number) {
    return this.mediaService.getMediaById(+id);
  }

  @ApiOperation({ summary: 'Update Media' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Put(':id')
  async updateMedia(
    @Param('id') id: number,
    @Body() updateMediaDto: UpdateMediaDto,
  ) {
    return await this.mediaService.updateMedia(+id, updateMediaDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async deleteMedia(@Param('id') id: number): Promise<number> {
    return await this.mediaService.deleteMedia(id);
  }
}
