import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Noteshare } from '@saas-template/database';
import type { CreateNoteshareDto, UpdateNoteshareDto } from '@saas-template/core';

@Injectable()
export class NotesharesRepository extends Repository<Noteshare> {
  constructor(private dataSource: DataSource) {
    super(Noteshare, dataSource.createEntityManager());
  }

  async findAll(userId: string): Promise<Noteshare[]> {
    return this.find({
      where: { userId },
      order: { createdAt: 'DESC' },
    });
  }

  async findById(id: string, userId: string): Promise<Noteshare | null> {
    return this.findOne({
      where: { id, userId },
    });
  }

  async create(userId: string, dto: CreateNoteshareDto): Promise<Noteshare> {
    const noteshare = this.create({
      ...dto,
      userId,
    });
    return this.save(noteshare);
  }

  async update(id: string, userId: string, dto: UpdateNoteshareDto): Promise<Noteshare | null> {
    const noteshare = await this.findById(id, userId);
    if (!noteshare) {
      return null;
    }

    Object.assign(noteshare, dto);
    return this.save(noteshare);
  }

  async remove(id: string, userId: string): Promise<boolean> {
    const noteshare = await this.findById(id, userId);
    if (!noteshare) {
      return false;
    }

    await this.softRemove(noteshare);
    return true;
  }
}
