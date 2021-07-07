import { EconAction } from '../../types';
import ParsedEcon from '../ParsedEcon';

export default function getDefindex(econ: ParsedEcon): number {
    if (!econ.item.actions) return -1;

    const wikiLink = econ.item.actions.find(isWikiLink);
    if (!wikiLink) return -1;

    return parseDefindex(wikiLink);
}

function isWikiLink(action: EconAction): boolean {
    return action.name === 'Item Wiki Page...';
}

function parseDefindex(action: EconAction): number {
    let [, strId] = action.link.match(/^http:\/\/wiki\.teamfortress\.com\/scripts\/itemredirect\.php\?id=(\d+)/) || [];
    if (!strId) return -1;
    const id = parseInt(strId);
    if (isNaN(id)) return -1;
    return id;
}
