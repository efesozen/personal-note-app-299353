import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Note } from '@saas-template/database';
import type { CreateNoteDto, UpdateNoteDto } from '@saas-template/core';

@Injectable()
export class NotesRepository extends Repository<Note> {
  constructor(private dataSource: DataSource) {
    super(Note, dataSource.createEntityManager());
  }

  async findAll(userId: string): Promise<Note[]> {
    return this.find({
      where: { userId },
      order: { createdAt: 'DESC' },
    });
  }

  async findById(id: string, userId: string): Promise<Note | null> {
    return this.findOne({
      where: { id, userId },
    });
  }

  async create(userId: string, dto: CreateNoteDto): Promise<Note> {
    const note = this.create({
      ...dto,
      userId,
    });
    return this.save(note);
  }

  async update(id: string, userId: string, dto: UpdateNoteDto): Promise<Note | null> {
    const note = await this.findById(id, userId);
    if (!note) {
      return null;
    }

    Object.assign(note, dto);
    return this.save(note);
  }

  async remove(id: string, userId: string): Promise<boolean> {
    const note = await this.findById(id, userId);
    if (!note) {
      return false;
    }

    await this.softRemove(note);
    return true;
  }
}
