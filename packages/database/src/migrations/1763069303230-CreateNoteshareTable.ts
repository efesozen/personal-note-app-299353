import { type MigrationInterface, type QueryRunner, Table, TableIndex, TableForeignKey } from 'typeorm';

export class CreateNoteshareTable implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'note_shares',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'note_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'shared_with_user_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            isNullable: false,
          },
          {
            name: 'deleted_at',
            type: 'timestamp with time zone',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'deleted_at',
            type: 'timestamp with time zone',
            isNullable: true,
          }
        ],
      }),
      true
    );


    await queryRunner.createForeignKey(
      'note_shares',
      new TableForeignKey({
        name: 'fk_note_shares_note_id',
        columnNames: ['note_id'],
        referencedTableName: 'notes',
        referencedColumnNames: ['id'],
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'note_shares',
      new TableForeignKey({
        name: 'fk_note_shares_shared_with_user_id',
        columnNames: ['shared_with_user_id'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      })
    );

    await queryRunner.createIndex(
      'note_shares',
      new TableIndex({
        name: 'idx_note_shares_note_id',
        columnNames: ['note_id'],
      })
    );

    await queryRunner.createIndex(
      'note_shares',
      new TableIndex({
        name: 'idx_note_shares_note_id',
        columnNames: ['note_id'],
      })
    );

    await queryRunner.createIndex(
      'note_shares',
      new TableIndex({
        name: 'idx_note_shares_shared_with_user_id',
        columnNames: ['shared_with_user_id'],
      })
    );

    await queryRunner.createIndex(
      'note_shares',
      new TableIndex({
        name: 'idx_note_shares_shared_with_user_id',
        columnNames: ['shared_with_user_id'],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('note_shares', 'idx_note_shares_note_id');
    await queryRunner.dropIndex('note_shares', 'idx_note_shares_shared_with_user_id');
    await queryRunner.dropForeignKey('note_shares', 'fk_note_shares_note_id');
    await queryRunner.dropForeignKey('note_shares', 'fk_note_shares_shared_with_user_id');
    await queryRunner.dropTable('note_shares');
  }
}
