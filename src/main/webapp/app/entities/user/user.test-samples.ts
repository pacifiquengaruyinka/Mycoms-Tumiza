import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 735,
  login: 'mDi',
};

export const sampleWithPartialData: IUser = {
  id: 23096,
  login: 'De',
};

export const sampleWithFullData: IUser = {
  id: 18080,
  login: '-n@2lf\\fxK2Uj\\q9OjI',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
