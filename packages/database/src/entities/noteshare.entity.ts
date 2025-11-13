import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import type { Note } from './note.entity';
import type { User } from './user.entity';

@Entity({ name: 'note_shares' })
export class Noteshare extends BaseEntity {
  @Column({ type: 'timestamp with time zone' })
  created_at!: Date;

  @Column({ type: 'timestamp with time zone' })
  updated_at!: Date;

  @Column({ type: 'timestamp with time zone', nullable: true })
  deleted_at?: Date;


@Column({ name: 'note_id' })
  note_id!: string;

  @Index('idx_note_shares_note_id')
  @ManyToOne('Note', 'noteshares')
  @JoinColumn({ name: 'note_id' })
  note!: Note;

  @Column({ name: 'shared_with_user_id' })
  shared_with_user_id!: string;

  @Index('idx_note_shares_shared_with_user_id')
  @ManyToOne('User', 'noteshares')
  @JoinColumn({ name: 'shared_with_user_id' })
  user!: User;
}
