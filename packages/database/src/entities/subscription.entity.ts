import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import type { User } from './user.entity';

@Entity({ name: 'subscriptions' })
export class Subscription extends BaseEntity {
  @Column({ type: 'timestamp with time zone' })
  start_date!: Date;

  @Column({ type: 'timestamp with time zone' })
  end_date!: Date;

  @Column({ type: 'enum', enum: ['ACTIVE', 'EXPIRED', 'CANCELLED'] })
  @Index('idx_subscriptions_status')
  status!: 'ACTIVE' | 'EXPIRED' | 'CANCELLED';

  @Column({ type: 'timestamp with time zone' })
  created_at!: Date;

  @Column({ type: 'timestamp with time zone' })
  updated_at!: Date;

  @Column({ type: 'timestamp with time zone', nullable: true })
  deleted_at?: Date;

}
