import Killstreak from '../parseEconItem/ParsedEcon/getDescriptions/Killstreak';
export declare type NameOrDefindex = {
    name: string;
} | {
    defindex: number;
};
export declare type ItemAttributes = {
    name: string;
    defindex?: number;
    quality: number | string;
    craftable: boolean;
    australium?: boolean;
    festivized?: boolean;
    killstreak?: number | string;
    elevated?: boolean;
    wear?: number | string;
    texture?: number | string;
    effect?: number | string;
    itemNumber?: ItemNumber;
    isUniqueHat?: boolean;
    target?: string;
    targetDefindex?: number;
    output?: string;
    outputDefindex?: number;
    outputQuality?: number | string;
};
export declare type ItemAttributesInStrings = {
    quality: string;
    killstreak?: string;
    wear?: string;
    texture?: string;
    effect?: string;
    outputQuality?: string;
};
export declare type DefaultItemAttributes = {
    name: string;
    craftable: boolean;
    australium?: boolean;
    festivized?: boolean;
    elevated?: boolean;
    itemNumber?: ItemNumber;
    isUniqueHat?: boolean;
    target?: string;
    output?: string;
};
export declare type ItemAttributesInNumbers = {
    quality: number;
    killstreak?: number;
    wear?: number;
    texture?: number;
    effect?: number;
    outputQuality?: number;
};
export declare type ItemDefindexes = {
    defindex: number;
    targetDefindex?: number;
    outputDefindex?: number;
};
export declare type ItemNumber = {
    value: number;
    type: string;
};
export declare type TargetItem = {
    target: string;
};
export declare type OutputItem = {
    output: string;
    outputQuality: string;
};
export declare type TargetOutputItem = TargetItem & OutputItem;
export declare type StringQuality = {
    value: string;
    elevated: boolean;
};
export declare type NumberQuality = {
    value: number;
    elevated: boolean;
};
export declare type BackpackTFListing = {
    quality: number | string;
    craftable: number;
    item_name: string;
    priceindex: string | number | void;
};
export declare type SKUAttributes = {
    defindex: number;
    quality: number;
    craftable: boolean;
    australium?: boolean;
    festivized?: boolean;
    elevated?: boolean;
    killstreak?: number;
    effect?: number;
    texture?: number;
    wear?: number;
    targetDefindex?: number;
    itemNumber?: ItemNumber;
    outputDefindex?: number;
    outputQuality?: number;
};
export declare type EconAction = {
    link: string;
    name: string;
};
export declare type EconTag = {
    name?: string;
    category: string;
    internal_name: string;
    localized_category_name?: string;
    localized_tag_name?: string;
    color?: string;
};
export declare type EconDescription = {
    value: string;
    color?: string;
    app_data?: {
        def_index: number;
    };
};
export declare type EconItem = {
    assetid: string;
    descriptions: EconDescription[];
    tradable: number;
    name: string;
    type: string;
    market_name: string;
    market_hash_name: string;
    commodity: number;
    marketable: number;
    tags: EconTag[];
    app_data?: {
        def_index: number;
    };
    icon_url?: string;
    icon_url_large?: string;
    appid?: number;
    contextid?: string;
    instanceid?: string;
    classid?: string;
    amount?: string;
    currency?: number;
    actions?: EconAction[];
    market_actions?: EconAction[];
    background_color?: string;
    name_color?: string;
    market_tradable_restriction?: number;
    market_marketable_restriction?: number;
};
export declare type TagAttributes = {
    quality: string;
    wear: number;
    classes: string[];
    type?: string;
    grade?: string;
    collection?: string;
};
export declare type DescriptionAttributes = {
    craftable: boolean;
    effect: string;
    killstreak: Killstreak;
    spells: string[];
    parts: string[];
    paint?: string;
    festivized?: boolean;
    texture?: string | void;
};
export declare type PropertyAttributes = {
    elevated: boolean;
    tradable: boolean;
    marketable: boolean;
    commodity: boolean;
};
export declare type NameAttributes = {
    australium: boolean;
    isUniqueHat: boolean;
    texture?: string | void;
    target?: string;
    output?: string;
    outputQuality?: string;
    itemNumber?: ItemNumber;
};
export declare type ParsedEconOptions = {
    inNumbers?: boolean;
    useDefindexes?: boolean;
};
export declare type PlaceholderEconNameAttributes = {
    tradable: boolean;
    craftable: boolean;
    quality: string | number;
    texture?: string | number;
    wear?: number;
    australium?: boolean;
    festivized?: boolean;
    effect?: string | number;
    isUniqueHat?: boolean;
    killstreak?: string | number;
    elevated?: boolean;
    target?: string;
    output?: string;
    outputQuality?: string | number;
    itemNumber?: ItemNumber;
    defindex?: number;
    outputDefindex?: number;
    targetDefindex?: number;
};
export declare type ParsedEconNameAtributes = {
    tradable: boolean;
    craftable: boolean;
    quality: string;
    texture?: string;
    wear?: string;
    australium?: boolean;
    festivized?: boolean;
    effect?: string;
    isUniqueHat?: boolean;
    killstreak?: string;
    elevated?: boolean;
    target?: string;
    output?: string;
    outputQuality?: string;
    itemNumber?: ItemNumber;
};
export declare type ConvertableAttributes = {
    killstreak?: string | number | void;
    wear?: string | number | void;
    effect?: string | number | void;
    quality: string | number;
    outputQuality?: string | number | void | null;
    texture?: string | number | void;
};
export declare type EconAttributes = ParsedEconNameAtributes & MetaEconAttributes;
export declare type MetaEconAttributes = {
    sheen?: string;
    killstreaker?: string;
    classes: string[];
    type?: string;
    collection?: string;
    grade?: string;
    paint?: string;
    parts: string[];
    spells: string[];
    marketable: boolean;
    commodity: boolean;
};
export declare type ParsedEconItem = EconAttributes & AddionalEconItemAttributes;
export declare type AddionalEconItemAttributes = {
    name: string;
    fullName: string;
    id: string;
    img: string;
};
export declare type DecomposeAttributes = {
    craftable: boolean;
    australium?: boolean;
    festivized?: boolean;
    wear?: string | void;
    effect?: string | void;
    texture?: string | void;
    itemNumber?: ItemNumber | null;
    isUniqueHat?: boolean;
    quality: StringQuality;
    killstreak?: string | void;
    usableItem?: Partial<TargetOutputItem> | null;
};
export declare type Defindexes = {
    defindex?: number | null;
    targetDefindex?: number;
    outputDefindex?: number;
};
/**
 * When using SKU
 */
export declare type StrigifySKUAttributes = SKUAttributes & {
    isUniqueHat?: false;
};
