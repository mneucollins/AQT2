import { ICity } from './city';

export interface IName{
    nameId: number;
    name: string;
	dob: string;
	dod: string;
    cities: ICity[];
}