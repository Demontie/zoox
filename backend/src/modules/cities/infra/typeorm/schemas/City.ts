/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
  ObjectID,
} from 'typeorm';

import State from '@modules/states/infra/typeorm/schemas/State';

@Entity('cities')
class City {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  state: State;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default City;
