import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Noteshare } from '@saas-template/database';
import { DatabaseModule } from '@/core/database/database.module';
import { NotesharesController } from './noteshares.controller';
import { NotesharesService } from './noteshares.service';
import { NotesharesRepository } from './noteshares.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Noteshare]),
    DatabaseModule,
  ],
  controllers: [NotesharesController],
  providers: [NotesharesService, NotesharesRepository],
  exports: [NotesharesService],
})
export class NotesharesModule {}
