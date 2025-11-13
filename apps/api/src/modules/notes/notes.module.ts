import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from '@saas-template/database';
import { DatabaseModule } from '@/core/database/database.module';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { NotesRepository } from './notes.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Note]),
    DatabaseModule,
  ],
  controllers: [NotesController],
  providers: [NotesService, NotesRepository],
  exports: [NotesService],
})
export class NotesModule {}
