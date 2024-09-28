import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'b12f33da-bff5-468a-95a4-b614b8c5dac0',
};

export const sampleWithPartialData: IAuthority = {
  name: 'e601d941-1998-4738-bb0b-30d180f38bb1',
};

export const sampleWithFullData: IAuthority = {
  name: 'ef2ae558-a0f6-4304-b76e-0fd02e014d44',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
