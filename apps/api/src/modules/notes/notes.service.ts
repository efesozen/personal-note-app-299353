import { UnitOfWork } from '@/core/database/unit-of-work.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import type { CreateNoteDto, NoteResponseDto, UpdateNoteDto } from '@saas-template/core';
import type { Note } from '@saas-template/database';
import { NotesRepository } from './notes.repository';

@Injectable()
export class NotesService {
  constructor(
    private readonly notesRepository: NotesRepository,
    private readonly uow: UnitOfWork
  ) {}

  async findAll(userId: string): Promise<NoteResponseDto[]> {
    const notes = await this.notesRepository.findAll(userId);
    return notes.map((note: Note) => this.toResponseDto(note));
  }

  async findOne(id: string, userId: string): Promise<NoteResponseDto> {
    const note = await this.notesRepository.findById(id, userId);
    if (!note) {
      throw new NotFoundException('Note not found');
    }
    return this.toResponseDto(note);
  }

  async create(userId: string, dto: CreateNoteDto): Promise<NoteResponseDto> {
    return this.uow.execute(async () => {
      const note = await this.notesRepository.create(userId, dto);
      return this.toResponseDto(note);
    });
  }

  async update(id: string, userId: string, dto: UpdateNoteDto): Promise<NoteResponseDto> {
    return this.uow.execute(async () => {
      const note = await this.notesRepository.update(id, userId, dto);
      if (!note) {
        throw new NotFoundException('Note not found');
      }
      return this.toResponseDto(note);
    });
  }

  async remove(id: string, userId: string): Promise<void> {
    return this.uow.execute(async () => {
      const deleted = await this.notesRepository.remove(id, userId);
      if (!deleted) {
        throw new NotFoundException('Note not found');
      }
    });
  }

  private toResponseDto(note: Note): NoteResponseDto {
    return {
      id: note.id,
      user_id: note.user_id,
      title: note.title,
      content: note.content,
      is_shared: note.is_shared,
      created_at: note.created_at,
      updated_at: note.updated_at,
      deleted_at: note.deleted_at,
      autosave: note.autosave,
      createdAt: note.createdAt,
      updatedAt: note.updatedAt,
    };
  }
}
