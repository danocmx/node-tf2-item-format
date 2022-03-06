import { EconDescription } from "../../../types";

export function isMedal(description: EconDescription): boolean {
    return description.value.startsWith('Medal no. ');
}

export function isCrate(description: EconDescription): boolean {
    return description.value.startsWith('Crate Series ') && description.color === '7ea9d1';
}

export function getMedal(description: EconDescription): number {
    return parseInt(description.value.replace('Medal no. ', ''));
}

export function getCrate(description: EconDescription): number {
    return parseInt(description.value.replace('Crate Series #', ''));
}