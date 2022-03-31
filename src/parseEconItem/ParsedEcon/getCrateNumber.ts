import ParsedEcon from "../ParsedEcon";

export default function getCrateNumber(econ: ParsedEcon): number {
    if (!econ.options.retrieveCrateNumber) return 0;
    if (econ.nameAttrs.itemNumber || econ.descriptions.itemNumber) return 0;
    
    const search = econ.options.useTrueDefindex ? econ.trueDefindex : econ.name;

    return econ.schema.getCrateNumber(search);
}
