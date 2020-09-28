import { ConvertableAttributes } from '../types';
export default function (item: ConvertableAttributes): {
    killstreak?: number;
    wear?: number;
    effect?: number;
    quality: number;
    outputQuality?: number;
};
