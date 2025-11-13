import { UnitOfWork } from '@/core/database/unit-of-work.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import type { CreateNoteshareDto, NoteshareResponseDto, UpdateNoteshareDto } from '@saas-template/core';
import type { Noteshare } from '@saas-template/database';
import { NotesharesRepository } from './noteshares.repository';

@Injectable()
export class NotesharesService {
  constructor(
    private readonly notesharesRepository: NotesharesRepository,
    private readonly uow: UnitOfWork
  ) {}

  async findAll(userId: string): Promise<NoteshareResponseDto[]> {
    const noteshares = await this.notesharesRepository.findAll(userId);
    return noteshares.map((noteshare: Noteshare) => this.toResponseDto(noteshare));
  }

  async findOne(id: string, userId: string): Promise<NoteshareResponseDto> {
    const noteshare = await this.notesharesRepository.findById(id, userId);
    if (!noteshare) {
      throw new NotFoundException('Noteshare not found');
    }
    return this.toResponseDto(noteshare);
  }

  async create(userId: string, dto: CreateNoteshareDto): Promise<NoteshareResponseDto> {
    return this.uow.execute(async () => {
      const noteshare = await this.notesharesRepository.create(userId, dto);
      return this.toResponseDto(noteshare);
    });
  }

  async update(id: string, userId: string, dto: UpdateNoteshareDto): Promise<NoteshareResponseDto> {
    return this.uow.execute(async () => {
      const noteshare = await this.notesharesRepository.update(id, userId, dto);
      if (!noteshare) {
        throw new NotFoundException('Noteshare not found');
      }
      return this.toResponseDto(noteshare);
    });
  }

  async remove(id: string, userId: string): Promise<void> {
    return this.uow.execute(async () => {
      const deleted = await this.notesharesRepository.remove(id, userId);
      if (!deleted) {
        throw new NotFoundException('Noteshare not found');
      }
    });
  }

  private toResponseDto(noteshare: Noteshare): NoteshareResponseDto {
    return {
      id: noteshare.id,
      note_id: noteshare.note_id,
      shared_with_user_id: noteshare.shared_with_user_id,
      created_at: noteshare.created_at,
      updated_at: noteshare.updated_at,
      deleted_at: noteshare.deleted_at,
      createdAt: noteshare.createdAt,
      updatedAt: noteshare.updatedAt,
    };
  }
}
