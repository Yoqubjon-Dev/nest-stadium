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
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { AdminAuthGuard } from '../guards/admin-auth.guards';

@ApiTags('Comment')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiOperation({ summary: 'Create a Comment' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Post()
  createComment(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.createComment(createCommentDto);
  }

  @ApiOperation({ summary: 'Get all Comment' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllComments() {
    return this.commentService.getAllComments();
  }

  @ApiOperation({ summary: 'Get Comment' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getCommentById(@Param('id') id: number) {
    return this.commentService.getCommentById(+id);
  }

  @ApiOperation({ summary: 'Update Comment' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Put(':id')
  async updateComment(
    @Param('id') id: number,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return await this.commentService.updateComment(+id, updateCommentDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async deleteComment(@Param('id') id: number): Promise<number> {
    return await this.commentService.deleteComment(id);
  }
}
