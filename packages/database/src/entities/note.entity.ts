import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import type { User } from './user.entity';

@Entity({ name: 'notes' })
export class Note extends BaseEntity {
  @Column()
  @Index('idx_notes_title')
  title!: string;

  @Column({ type: 'jsonb' })
  content!: Record<string, unknown>;

  @Column({ type: 'boolean' })
  is_shared!: boolean;

  @Column({ type: 'timestamp with time zone' })
  created_at!: Date;

  @Column({ type: 'timestamp with time zone' })
  updated_at!: Date;

  @Column({ type: 'timestamp with time zone', nullable: true })
  deleted_at?: Date;

  @Column({ type: 'boolean', nullable: true })
  autosave?: boolean;


@Column({ name: 'user_id' })
  user_id!: string;

  @Index('idx_notes_user_id')
  @ManyToOne('User', 'notes')
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
