import { EconDescription } from '../../../types';

export  function isFestivized(description: EconDescription): boolean {
	return description.value === 'Festivized' && description.color === 'ffd700';
};
