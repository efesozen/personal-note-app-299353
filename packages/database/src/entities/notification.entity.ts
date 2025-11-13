import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import type { User } from './user.entity';

@Entity({ name: 'notifications' })
export class Notification extends BaseEntity {
  @Column()
  message!: string;

  @Column({ type: 'timestamp with time zone' })
  reminder_time!: Date;

  @Column({ type: 'boolean' })
  @Index('idx_notifications_is_read')
  is_read!: boolean;

  @Column({ type: 'timestamp with time zone' })
  created_at!: Date;

  @Column({ type: 'timestamp with time zone' })
  updated_at!: Date;

  @Column({ type: 'timestamp with time zone', nullable: true })
  deleted_at?: Date;


@Column({ name: 'user_id' })
  user_id!: string;

  @Index('idx_notifications_user_id')
  @ManyToOne('User', 'notifications')
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
