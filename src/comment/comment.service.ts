import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './models/comment.model';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment) private commentRepo: typeof Comment) {}

  async createComment(createCommentDto: CreateCommentDto) {
    const newComment = await this.commentRepo.create(createCommentDto);
    return newComment;
  }

  async getAllComments() {
    const result = await this.commentRepo.findAll({
      include: { all: true },
    });
    return result;
  }

  async getCommentById(id: number) {
    const result = await this.commentRepo.findByPk(id);
    return result;
  }

  async updateComment(id: number, updateCommentDto: UpdateCommentDto) {
    const result = await this.commentRepo.update(updateCommentDto, {
      where: { id },
    });
    return result;
  }

  async deleteComment(id: number): Promise<number> {
    const result = await this.commentRepo.destroy({ where: { id } });
    return result;
  }
}
