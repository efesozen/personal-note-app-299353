import { IsOptional, IsString, MinLength, IsBoolean, IsNumber, IsEnum, IsDate, IsUUID } from 'class-validator';

export class CreateNoteshareDto {
  @IsUUID()
  note_id!: string;

  @IsUUID()
  shared_with_user_id!: string;

  @IsDate()
  created_at!: Date;

  @IsDate()
  updated_at!: Date;

  @IsOptional()
  @IsDate()
  deleted_at?: Date;
}

export class UpdateNoteshareDto {
  @IsOptional()
  @IsUUID()
  note_id?: string | undefined;

  @IsOptional()
  @IsUUID()
  shared_with_user_id?: string | undefined;

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
}

export class NoteshareResponseDto {
  id!: string;
  note_id!: string;
  shared_with_user_id!: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  createdAt!: Date;
  updatedAt!: Date;
}
