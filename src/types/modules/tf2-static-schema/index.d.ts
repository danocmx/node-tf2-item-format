declare module 'tf2-static-schema' {
    export function requireStatic(static: string): object;

    export type NameToDefindex = {[name: string]: number};
    export type DefindexToName = {[defindex: number]: string};
    export type SchemaEnum = NameToDefindex & DefindexToName;

    // Incomplete, suffices for library.
    export type SchemaItem = {
        name: string;
        defindex: number;
        item_class: string;
        item_type_name: string;
        item_name: string;
        proper_name: boolean;
        item_slot: string;
        model_player: string;
        item_quality: number;
        image_inventory: string;
        min_ilevel: number;
        max_ilevel: number;
        image_url: string;
        image_url_large: string;
        craft_class: string;
        craft_material_type: string;
        capabilities: {
            nameable: boolean;
            can_gift_wrap: boolean;
            can_craft_mark: boolean;
            can_be_restored: boolean;
            strange_parts: boolean;
            can_card_upgrade: boolean;
            can_strangify: boolean;
            can_killstreakify: boolean;
            can_consume: boolean;
        };
        used_by_classes: string[],
        attributes: { name?: string, class?: string, value: number }[];
    }
};
