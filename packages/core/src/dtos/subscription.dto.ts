import { IsOptional, IsString, MinLength, IsBoolean, IsNumber, IsEnum, IsDate, IsUUID } from 'class-validator';

export enum SubscriptionStatus {
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED',
  CANCELLED = 'CANCELLED'
}

export class CreateSubscriptionDto {
  @IsUUID()
  user_id!: string;

  @IsDate()
  start_date!: Date;

  @IsDate()
  end_date!: Date;

  @IsEnum(SubscriptionStatus)
  status!: SubscriptionStatus;

  @IsDate()
  created_at!: Date;

  @IsDate()
  updated_at!: Date;

  @IsOptional()
  @IsDate()
  deleted_at?: Date;
}

export class UpdateSubscriptionDto {
  @IsOptional()
  @IsUUID()
  user_id?: string | undefined;

  @IsOptional()
  @IsDate()
  start_date?: Date | undefined;

  @IsOptional()
  @IsDate()
  end_date?: Date | undefined;

  @IsOptional()
  @IsEnum(SubscriptionStatus)
  status?: SubscriptionStatus | undefined;

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

export class SubscriptionResponseDto {
  id!: string;
  user_id!: string;
  start_date!: Date;
  end_date!: Date;
  status!: SubscriptionStatus;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  createdAt!: Date;
  updatedAt!: Date;
}
