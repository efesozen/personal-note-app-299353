import { IsOptional, IsString, MinLength, IsBoolean, IsNumber, IsEnum, IsDate, IsUUID } from 'class-validator';

export class CreateNoteDto {
  @IsUUID()
  user_id!: string;

  @IsString()
  @MinLength(1)
  title!: string;

  content!: Record<string, unknown>;

  @IsBoolean()
  is_shared!: boolean;

  @IsDate()
  created_at!: Date;

  @IsDate()
  updated_at!: Date;

  @IsOptional()
  @IsDate()
  deleted_at?: Date;

  @IsOptional()
  @IsBoolean()
  autosave?: boolean;
}

export class UpdateNoteDto {
  @IsOptional()
  @IsUUID()
  user_id?: string | undefined;

  @IsOptional()
  @IsString()
  @MinLength(1)
  title?: string | undefined;

  @IsOptional()
  content?: Record<string, unknown> | undefined;

  @IsOptional()
  @IsBoolean()
  is_shared?: boolean | undefined;

  @IsOptional()
  @IsDate()
  created_at?: Date | undefined;

  @IsOptional()
  @IsDate()
  updated_at?: Date | undefined;

  @IsOptional()
  @IsOptional()
  @IsDate()
  deleted_at?: Date | undefined;

  @IsOptional()
  @IsOptional()
  @IsBoolean()
  autosave?: boolean | undefined;
}

export class NoteResponseDto {
  id!: string;
  user_id!: string;
  title!: string;
  content!: Record<string, unknown>;
  is_shared!: boolean;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  autosave?: boolean;
  createdAt!: Date;
  updatedAt!: Date;
}
