import { TSendCommand } from '../schema/types';
export interface GetChannelInput {
    channel_id: string;
}
/**
 *
 * @description
 * RPC documentation here: https://discord.com/developers/docs/topics/rpc#getchannel
 * Calling getChannel gets info about the requested channel such as the channel name.
 *
 * Supported Platforms
 * | Web | iOS | Android |
 * |-----|-----|---------|
 * | ✅  | ✅  | ✅      |
 *
 * Required scopes:
 * - [guilds] for guild channels
 * - [guilds, dm_channels.read] for GDM channels. dm_channels.read requires approval from Discord.
 *
 * @example
 * await discordSdk.commands.getActivity({
 *   channel_id: discordSdk.channelId,
 * });
 */
export declare const getChannel: (sendCommand: TSendCommand) => (args: GetChannelInput) => Promise<{
    type: 0 | 10 | 1 | 4 | 2 | 3 | 5 | 6 | 11 | 12 | 13 | 14 | 15 | -1;
    id: string;
    voice_states: {
        user: {
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
        };
        nick: string;
        mute: boolean;
        voice_state: {
            deaf: boolean;
            mute: boolean;
            self_mute: boolean;
            self_deaf: boolean;
            suppress: boolean;
        };
        volume: number;
    }[];
    messages: {
        type: number;
        id: string;
        content: string;
        timestamp: string;
        channel_id: string;
        tts: boolean;
        mention_everyone: boolean;
        mentions: {
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
        }[];
        mention_roles: string[];
        mention_channels: {
            type: number;
            id: string;
            name: string;
            guild_id: string;
        }[];
        attachments: {
            id: string;
            url: string;
            size: number;
            filename: string;
            proxy_url: string;
            height?: number | null | undefined;
            width?: number | null | undefined;
        }[];
        embeds: {
            type?: string | null | undefined;
            description?: string | null | undefined;
            url?: string | null | undefined;
            color?: number | null | undefined;
            title?: string | null | undefined;
            timestamp?: string | null | undefined;
            footer?: {
                text: string;
                icon_url?: string | null | undefined;
                proxy_icon_url?: string | null | undefined;
            } | null | undefined;
            image?: {
                height?: number | null | undefined;
                url?: string | null | undefined;
                width?: number | null | undefined;
                proxy_url?: string | null | undefined;
            } | null | undefined;
            thumbnail?: {
                height?: number | null | undefined;
                url?: string | null | undefined;
                width?: number | null | undefined;
                proxy_url?: string | null | undefined;
            } | null | undefined;
            video?: {
                height?: number | null | undefined;
                url?: string | null | undefined;
                width?: number | null | undefined;
            } | null | undefined;
            provider?: {
                name?: string | null | undefined;
                url?: string | null | undefined;
            } | null | undefined;
            author?: {
                name?: string | null | undefined;
                url?: string | null | undefined;
                icon_url?: string | null | undefined;
                proxy_icon_url?: string | null | undefined;
            } | null | undefined;
            fields?: {
                value: string;
                name: string;
                inline: boolean;
            }[] | null | undefined;
        }[];
        pinned: boolean;
        application?: {
            id: string;
            description: string;
            name: string;
            icon?: string | null | undefined;
            cover_image?: string | null | undefined;
        } | null | undefined;
        flags?: number | null | undefined;
        activity?: {
            type: number;
            party_id?: string | null | undefined;
        } | null | undefined;
        nonce?: string | number | null | undefined;
        guild_id?: string | null | undefined;
        author?: {
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
        member?: {
            user: {
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
            };
            roles: string[];
            joined_at: string;
            deaf: boolean;
            mute: boolean;
            nick?: string | null | undefined;
        } | null | undefined;
        edited_timestamp?: string | null | undefined;
        reactions?: {
            emoji: {
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
            };
            count: number;
            me: boolean;
        }[] | null | undefined;
        webhook_id?: string | null | undefined;
        message_reference?: {
            guild_id?: string | null | undefined;
            message_id?: string | null | undefined;
            channel_id?: string | null | undefined;
        } | null | undefined;
        stickers?: unknown[] | null | undefined;
        referenced_message?: unknown;
    }[];
    name?: string | null | undefined;
    guild_id?: string | null | undefined;
    position?: number | null | undefined;
    topic?: string | null | undefined;
    bitrate?: number | null | undefined;
    user_limit?: number | null | undefined;
}>;
