import State from '@modules/states/infra/typeorm/schemas/State';

export default interface ICreateCityDTO {
  name: string;
  state: State;
}
