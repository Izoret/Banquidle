import * as zod from 'zod';
import { TSendCommand } from '../schema/types';
export declare const SetActivity: zod.ZodNullable<zod.ZodObject<zod.objectUtil.extendShape<Pick<{
    name: zod.ZodString;
    type: zod.ZodNumber;
    url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    created_at: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    timestamps: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        start: zod.ZodOptional<zod.ZodNumber>;
        end: zod.ZodOptional<zod.ZodNumber>;
    }, "strip", zod.ZodTypeAny, {
        start?: number | undefined;
        end?: number | undefined;
    }, {
        start?: number | undefined;
        end?: number | undefined;
    }>>>;
    application_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    details: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    details_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    state: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    state_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    emoji: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        id: zod.ZodString;
        name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        roles: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>>;
        user: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
            id: zod.ZodString;
            username: zod.ZodString;
            discriminator: zod.ZodString;
            global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
                asset: zod.ZodString;
                sku_id: zod.ZodOptional<zod.ZodString>;
            }, "strip", zod.ZodTypeAny, {
                asset: string;
                sku_id?: string | undefined;
            }, {
                asset: string;
                sku_id?: string | undefined;
            }>>;
            bot: zod.ZodBoolean;
            flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
            premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        }, "strip", zod.ZodTypeAny, {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            avatar?: string | null | undefined;
            global_name?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }, {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            avatar?: string | null | undefined;
            global_name?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }>>>;
        require_colons: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
        managed: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
        animated: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
        available: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    }, "strip", zod.ZodTypeAny, {
        id: string;
        user?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            avatar?: string | null | undefined;
            global_name?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        } | null | undefined;
        name?: string | null | undefined;
        animated?: boolean | null | undefined;
        roles?: string[] | null | undefined;
        require_colons?: boolean | null | undefined;
        managed?: boolean | null | undefined;
        available?: boolean | null | undefined;
    }, {
        id: string;
        user?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            avatar?: string | null | undefined;
            global_name?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        } | null | undefined;
        name?: string | null | undefined;
        animated?: boolean | null | undefined;
        roles?: string[] | null | undefined;
        require_colons?: boolean | null | undefined;
        managed?: boolean | null | undefined;
        available?: boolean | null | undefined;
    }>>>;
    party: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        size: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodNumber, "many">>>;
    }, "strip", zod.ZodTypeAny, {
        id?: string | null | undefined;
        size?: number[] | null | undefined;
    }, {
        id?: string | null | undefined;
        size?: number[] | null | undefined;
    }>>>;
    assets: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        large_image: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
        large_text: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
        large_url: zod.ZodOptional<zod.ZodNullable<zod.ZodOptional<zod.ZodString>>>;
        small_image: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
        small_text: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
        small_url: zod.ZodOptional<zod.ZodNullable<zod.ZodOptional<zod.ZodString>>>;
    }, "strip", zod.ZodTypeAny, {
        large_image?: string | null | undefined;
        large_text?: string | null | undefined;
        large_url?: string | null | undefined;
        small_image?: string | null | undefined;
        small_text?: string | null | undefined;
        small_url?: string | null | undefined;
    }, {
        large_image?: string | null | undefined;
        large_text?: string | null | undefined;
        large_url?: string | null | undefined;
        small_image?: string | null | undefined;
        small_text?: string | null | undefined;
        small_url?: string | null | undefined;
    }>>>;
    secrets: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        join: zod.ZodOptional<zod.ZodString>;
        match: zod.ZodOptional<zod.ZodString>;
    }, "strip", zod.ZodTypeAny, {
        join?: string | undefined;
        match?: string | undefined;
    }, {
        join?: string | undefined;
        match?: string | undefined;
    }>>>;
    instance: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
}, "type" | "state" | "state_url" | "details" | "details_url" | "assets" | "timestamps" | "party" | "secrets" | "instance">, {
    type: zod.ZodOptional<zod.ZodNumber>;
    instance: zod.ZodOptional<zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>>;
}>, "strip", zod.ZodTypeAny, {
    type?: number | undefined;
    state?: string | null | undefined;
    state_url?: string | null | undefined;
    details?: string | null | undefined;
    details_url?: string | null | undefined;
    assets?: {
        large_image?: string | null | undefined;
        large_text?: string | null | undefined;
        large_url?: string | null | undefined;
        small_image?: string | null | undefined;
        small_text?: string | null | undefined;
        small_url?: string | null | undefined;
    } | null | undefined;
    timestamps?: {
        start?: number | undefined;
        end?: number | undefined;
    } | null | undefined;
    party?: {
        id?: string | null | undefined;
        size?: number[] | null | undefined;
    } | null | undefined;
    secrets?: {
        join?: string | undefined;
        match?: string | undefined;
    } | null | undefined;
    instance?: boolean | null | undefined;
}, {
    type?: number | undefined;
    state?: string | null | undefined;
    state_url?: string | null | undefined;
    details?: string | null | undefined;
    details_url?: string | null | undefined;
    assets?: {
        large_image?: string | null | undefined;
        large_text?: string | null | undefined;
        large_url?: string | null | undefined;
        small_image?: string | null | undefined;
        small_text?: string | null | undefined;
        small_url?: string | null | undefined;
    } | null | undefined;
    timestamps?: {
        start?: number | undefined;
        end?: number | undefined;
    } | null | undefined;
    party?: {
        id?: string | null | undefined;
        size?: number[] | null | undefined;
    } | null | undefined;
    secrets?: {
        join?: string | undefined;
        match?: string | undefined;
    } | null | undefined;
    instance?: boolean | null | undefined;
}>>;
export interface SetActivityInput {
    activity: zod.infer<typeof SetActivity>;
}
/**
 *
 * @description
 * RPC documentation here: https://discord.com/developers/docs/topics/rpc#setactivity
 * Calling setActivity allows modifying how your activity's rich presence is displayed in the Discord App
 *
 * Supported Platforms
 * | Web | iOS | Android |
 * |-----|-----|---------|
 * | ✅  | ✅  | ✅      |
 *
 * Required scopes: [rpc.activities.write]
 *
 * @example
 * await discordSdk.commands.setActivity({
 *   activity: {
 *     type: 0,
 *     details: 'Details',
 *     state: 'Playing',
 *   },
 * });
 */
export declare const setActivity: (sendCommand: TSendCommand) => (args: SetActivityInput) => Promise<{
    type: number;
    name: string;
    flags?: number | null | undefined;
    url?: string | null | undefined;
    application_id?: string | null | undefined;
    state?: string | null | undefined;
    state_url?: string | null | undefined;
    details?: string | null | undefined;
    details_url?: string | null | undefined;
    emoji?: {
        id: string;
        user?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            avatar?: string | null | undefined;
            global_name?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        } | null | undefined;
        name?: string | null | undefined;
        animated?: boolean | null | undefined;
        roles?: string[] | null | undefined;
        require_colons?: boolean | null | undefined;
        managed?: boolean | null | undefined;
        available?: boolean | null | undefined;
    } | null | undefined;
    assets?: {
        large_image?: string | null | undefined;
        large_text?: string | null | undefined;
        large_url?: string | null | undefined;
        small_image?: string | null | undefined;
        small_text?: string | null | undefined;
        small_url?: string | null | undefined;
    } | null | undefined;
    timestamps?: {
        start?: number | undefined;
        end?: number | undefined;
    } | null | undefined;
    party?: {
        id?: string | null | undefined;
        size?: number[] | null | undefined;
    } | null | undefined;
    secrets?: {
        join?: string | undefined;
        match?: string | undefined;
    } | null | undefined;
    created_at?: number | null | undefined;
    instance?: boolean | null | undefined;
}>;
