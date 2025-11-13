import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import type { CreateNoteshareDto, NoteshareResponseDto, UpdateNoteshareDto } from '@saas-template/core';
import type { User } from '@saas-template/database';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { NotesharesService } from './noteshares.service';

@Controller('noteshares')
@UseGuards(JwtAuthGuard)
export class NotesharesController {
  constructor(private readonly notesharesService: NotesharesService) {}

  @Get()
  async findAll(@CurrentUser() user: User): Promise<NoteshareResponseDto[]> {
    return this.notesharesService.findAll(user.id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentUser() user: User): Promise<NoteshareResponseDto> {
    return this.notesharesService.findOne(id, user.id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() dto: CreateNoteshareDto,
    @CurrentUser() user: User
  ): Promise<NoteshareResponseDto> {
    return this.notesharesService.create(user.id, dto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateNoteshareDto,
    @CurrentUser() user: User
  ): Promise<NoteshareResponseDto> {
    return this.notesharesService.update(id, user.id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string, @CurrentUser() user: User): Promise<void> {
    return this.notesharesService.remove(id, user.id);
  }
}
