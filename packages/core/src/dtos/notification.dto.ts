import { IsOptional, IsString, MinLength, IsBoolean, IsNumber, IsEnum, IsDate, IsUUID } from 'class-validator';

export class CreateNotificationDto {
  @IsUUID()
  user_id!: string;

  @IsString()
  @MinLength(1)
  message!: string;

  @IsDate()
  reminder_time!: Date;

  @IsBoolean()
  is_read!: boolean;

  @IsDate()
  created_at!: Date;

  @IsDate()
  updated_at!: Date;

  @IsOptional()
  @IsDate()
  deleted_at?: Date;
}

export class UpdateNotificationDto {
  @IsOptional()
  @IsUUID()
  user_id?: string | undefined;

  @IsOptional()
  @IsString()
  @MinLength(1)
  message?: string | undefined;

  @IsOptional()
  @IsDate()
  reminder_time?: Date | undefined;

  @IsOptional()
  @IsBoolean()
  is_read?: boolean | undefined;

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

export class NotificationResponseDto {
  id!: string;
  user_id!: string;
  message!: string;
  reminder_time!: Date;
  is_read!: boolean;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  createdAt!: Date;
  updatedAt!: Date;
}
