import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
  ObjectID,
} from 'typeorm';

@Entity('states')
class State {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  shortname: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default State;
