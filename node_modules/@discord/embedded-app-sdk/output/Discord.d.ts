import EventEmitter from 'eventemitter3';
import * as zod from 'zod';
import { EventSchema } from './schema/events';
import { Platform, RPCCloseCodes } from './Constants';
import { IDiscordSDK, MaybeZodObjectArray, SdkConfiguration } from './interface';
export declare enum Opcodes {
    HANDSHAKE = 0,
    FRAME = 1,
    CLOSE = 2,
    HELLO = 3
}
export declare class DiscordSDK implements IDiscordSDK {
    readonly clientId: string;
    readonly instanceId: string;
    readonly customId: string | null;
    readonly referrerId: string | null;
    readonly platform: Platform;
    readonly guildId: string | null;
    readonly channelId: string | null;
    readonly locationId: string | null;
    readonly sdkVersion: string;
    readonly mobileAppVersion: string | null;
    readonly configuration: SdkConfiguration;
    readonly source: Window | WindowProxy | null;
    readonly sourceOrigin: string;
    private frameId;
    private eventBus;
    private isReady;
    private pendingCommands;
    private getTransfer;
    private sendCommand;
    commands: {
        authorize: (args: import("./commands/authorize").AuthorizeInput) => Promise<{
            code: string;
        }>;
        captureLog: (args: import("./commands/captureLog").CaptureLogInput) => Promise<{} | null>;
        encourageHardwareAcceleration: (args: void) => Promise<{
            enabled: boolean;
        }>;
        getChannel: (args: import("./commands/getChannel").GetChannelInput) => Promise<{
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
        getChannelPermissions: (args: void) => Promise<{
            permissions: string | bigint;
        }>;
        getEntitlements: (args: void) => Promise<{
            entitlements: {
                type: 1 | 4 | 2 | 3 | 5 | 6 | 7 | -1;
                id: string;
                application_id: string;
                user_id: string;
                sku_id: string;
                gift_code_flags: number;
                parent_id?: string | null | undefined;
                gifter_user_id?: string | null | undefined;
                branches?: string[] | null | undefined;
                starts_at?: string | null | undefined;
                ends_at?: string | null | undefined;
                consumed?: boolean | null | undefined;
                deleted?: boolean | null | undefined;
                gift_code_batch_id?: string | null | undefined;
            }[];
        }>;
        getPlatformBehaviors: (args: void) => Promise<{
            iosKeyboardResizesView?: boolean | undefined;
        }>;
        getSkus: (args: void) => Promise<{
            skus: {
                type: 1 | 4 | 2 | 3 | 5 | -1;
                id: string;
                name: string;
                flags: number;
                application_id: string;
                price: {
                    amount: number;
                    currency: string;
                };
                release_date: string | null;
            }[];
        }>;
        openExternalLink: (args: import("./commands/openExternalLink").OpenExternalLinkInput) => Promise<{
            opened: boolean | null;
        }>;
        openInviteDialog: (args: void) => Promise<{} | null>;
        setActivity: (args: import("./commands/setActivity").SetActivityInput) => Promise<{
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
        setConfig: (args: import("./commands/setConfig").SetConfigInput) => Promise<{
            use_interactive_pip: boolean;
        }>;
        setOrientationLockState: (args: import("./commands/setOrientationLockState").SetOrientationLockStateInput) => Promise<{} | null>;
        startPurchase: (args: import("./commands/startPurchase").StartPurchaseInput) => Promise<{
            type: 1 | 4 | 2 | 3 | 5 | 6 | 7 | -1;
            id: string;
            application_id: string;
            user_id: string;
            sku_id: string;
            gift_code_flags: number;
            parent_id?: string | null | undefined;
            gifter_user_id?: string | null | undefined;
            branches?: string[] | null | undefined;
            starts_at?: string | null | undefined;
            ends_at?: string | null | undefined;
            consumed?: boolean | null | undefined;
            deleted?: boolean | null | undefined;
            gift_code_batch_id?: string | null | undefined;
        }[] | null>;
        userSettingsGetLocale: (args: void) => Promise<{
            locale: string;
        }>;
        getInstanceConnectedParticipants: (args: void) => Promise<{
            participants: {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                flags: number;
                avatar?: string | null | undefined;
                global_name?: string | null | undefined;
                avatar_decoration_data?: {
                    asset: string;
                    skuId?: string | undefined;
                    expiresAt?: number | undefined;
                } | null | undefined;
                premium_type?: number | null | undefined;
                nickname?: string | undefined;
            }[];
        }>;
        authenticate: (args: {
            access_token?: string | null | undefined;
        }) => Promise<{
            access_token: string;
            user: {
                username: string;
                discriminator: string;
                id: string;
                public_flags: number;
                avatar?: string | null | undefined;
                global_name?: string | null | undefined;
            };
            scopes: (-1 | "identify" | "email" | "connections" | "guilds" | "guilds.join" | "guilds.members.read" | "guilds.channels.read" | "gdm.join" | "bot" | "rpc" | "rpc.notifications.read" | "rpc.voice.read" | "rpc.voice.write" | "rpc.video.read" | "rpc.video.write" | "rpc.screenshare.read" | "rpc.screenshare.write" | "rpc.activities.write" | "webhook.incoming" | "messages.read" | "applications.builds.upload" | "applications.builds.read" | "applications.commands" | "applications.commands.permissions.update" | "applications.commands.update" | "applications.store.update" | "applications.entitlements" | "activities.read" | "activities.write" | "activities.invites.write" | "relationships.read" | "relationships.write" | "voice" | "dm_channels.read" | "role_connections.write" | "presences.read" | "presences.write" | "openid" | "dm_channels.messages.read" | "dm_channels.messages.write" | "gateway.connect" | "account.global_name.update" | "payment_sources.country_code" | "sdk.social_layer_presence" | "sdk.social_layer" | "lobbies.write" | "application_identities.write")[];
            expires: string;
            application: {
                id: string;
                description: string;
                name: string;
                icon?: string | null | undefined;
                rpc_origins?: string[] | undefined;
            };
        }>;
        getActivityInstanceConnectedParticipants: (args: void) => Promise<{
            participants: {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                flags: number;
                avatar?: string | null | undefined;
                global_name?: string | null | undefined;
                avatar_decoration_data?: {
                    asset: string;
                    skuId?: string | undefined;
                    expiresAt?: number | undefined;
                } | null | undefined;
                premium_type?: number | null | undefined;
                nickname?: string | undefined;
            }[];
        }>;
        getQuestEnrollmentStatus: (args: {
            quest_id: string;
        }) => Promise<{
            quest_id: string;
            is_enrolled: boolean;
            enrolled_at?: string | null | undefined;
        }>;
        getRelationships: (args: void) => Promise<{
            relationships: {
                type: number;
                user: {
                    username: string;
                    discriminator: string;
                    id: string;
                    bot: boolean;
                    flags: number;
                    avatar?: string | null | undefined;
                    global_name?: string | null | undefined;
                    avatar_decoration_data?: {
                        asset: string;
                        skuId?: string | undefined;
                        expiresAt?: number | undefined;
                    } | null | undefined;
                    premium_type?: number | null | undefined;
                };
                presence?: {
                    status: string;
                    activity?: {
                        name: string;
                        type?: number | undefined;
                        flags?: number | undefined;
                        url?: string | null | undefined;
                        session_id?: string | undefined;
                        application_id?: string | undefined;
                        status_display_type?: number | undefined;
                        state?: string | undefined;
                        state_url?: string | undefined;
                        details?: string | undefined;
                        details_url?: string | undefined;
                        emoji?: {
                            name: string;
                            id?: string | null | undefined;
                            animated?: boolean | null | undefined;
                        } | null | undefined;
                        assets?: {
                            large_image?: string | undefined;
                            large_text?: string | undefined;
                            large_url?: string | undefined;
                            small_image?: string | undefined;
                            small_text?: string | undefined;
                            small_url?: string | undefined;
                        } | undefined;
                        timestamps?: {
                            start?: number | undefined;
                            end?: number | undefined;
                        } | undefined;
                        party?: {
                            id?: string | undefined;
                            size?: number[] | undefined;
                            privacy?: number | undefined;
                        } | undefined;
                        secrets?: {
                            join?: string | undefined;
                            match?: string | undefined;
                        } | undefined;
                        sync_id?: string | undefined;
                        created_at?: number | undefined;
                        instance?: boolean | undefined;
                        metadata?: {} | undefined;
                        platform?: string | undefined;
                        supported_platforms?: string[] | undefined;
                        buttons?: string[] | undefined;
                        hangStatus?: string | undefined;
                    } | null | undefined;
                } | undefined;
            }[];
        }>;
        getUser: (args: {
            id: string;
        }) => Promise<{
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            flags: number;
            avatar?: string | null | undefined;
            global_name?: string | null | undefined;
            avatar_decoration_data?: {
                asset: string;
                skuId?: string | undefined;
                expiresAt?: number | undefined;
            } | null | undefined;
            premium_type?: number | null | undefined;
        } | null>;
        initiateImageUpload: (args: void) => Promise<{
            image_url: string;
        }>;
        inviteUserEmbedded: (args: {
            user_id: string;
            content?: string | undefined;
        }) => Promise<{} | null | undefined>;
        openShareMomentDialog: (args: {
            mediaUrl: string;
        }) => Promise<{} | null | undefined>;
        questStartTimer: (args: {
            quest_id: string;
        }) => Promise<{
            success: boolean;
        }>;
        shareInteraction: (args: {
            command: string;
            options?: {
                value: string;
                name: string;
            }[] | undefined;
            content?: string | undefined;
            require_launch_channel?: boolean | undefined;
            preview_image?: {
                height: number;
                url: string;
                width: number;
            } | undefined;
            components?: {
                type: 1;
                components?: {
                    type: 2;
                    style: number;
                    label?: string | undefined;
                    custom_id?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            pid?: number | undefined;
        }) => Promise<{
            success: boolean;
        }>;
        shareLink: (args: {
            message: string;
            custom_id?: string | undefined;
            link_id?: string | undefined;
        }) => Promise<{
            success: boolean;
            didCopyLink: boolean;
            didSendMessage: boolean;
        }>;
    };
    constructor(clientId: string, configuration?: SdkConfiguration);
    close(code: RPCCloseCodes, message: string): void;
    subscribe<K extends keyof typeof EventSchema>(event: K, listener: (event: zod.infer<(typeof EventSchema)[K]['payload']>['data']) => unknown, ...rest: MaybeZodObjectArray<(typeof EventSchema)[K]>): Promise<EventEmitter<string | symbol, any>>;
    unsubscribe<K extends keyof typeof EventSchema>(event: K, listener: (event: zod.infer<(typeof EventSchema)[K]['payload']>['data']) => unknown, ...rest: MaybeZodObjectArray<(typeof EventSchema)[K]>): Promise<EventEmitter<string | symbol, any>>;
    ready(): Promise<void>;
    private parseMajorMobileVersion;
    private handshake;
    private addOnReadyListener;
    private overrideConsoleLogging;
    /**
     * WARNING - All "console" logs are emitted as messages to the Discord client
     *  If you write "console.log" anywhere in handleMessage or subsequent message handling
     * there is a good chance you will cause an infinite loop where you receive a message
     * which causes "console.log" which sends a message, which causes the discord client to
     * send a reply which causes handleMessage to fire again, and again to inifinity
     *
     * If you need to log within handleMessage, consider setting
     * config.disableConsoleLogOverride to true when initializing the SDK
     */
    private handleMessage;
    private handleClose;
    private handleHandshake;
    private handleFrame;
    _getSearch(): string;
}
