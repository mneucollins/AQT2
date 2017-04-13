import { IPanel } from './panel';

export interface IBlock {
    blockNum: string;
    imageUrl: string;
    panels: IPanel[];
    //...+other metadata
    //layout?
}