/**
 * This file is generated.
 * Run "npm run sync" to regenerate file.
 * @generated
 */
import { z, infer as zInfer } from 'zod';
export declare const InitiateImageUploadResponseSchema: z.ZodObject<{
    image_url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    image_url: string;
}, {
    image_url: string;
}>;
export type InitiateImageUploadResponse = zInfer<typeof InitiateImageUploadResponseSchema>;
export declare const OpenShareMomentDialogRequestSchema: z.ZodObject<{
    mediaUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    mediaUrl: string;
}, {
    mediaUrl: string;
}>;
export type OpenShareMomentDialogRequest = zInfer<typeof OpenShareMomentDialogRequestSchema>;
export declare const AuthenticateRequestSchema: z.ZodObject<{
    access_token: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
}, "strip", z.ZodTypeAny, {
    access_token?: string | null | undefined;
}, {
    access_token?: string | null | undefined;
}>;
export type AuthenticateRequest = zInfer<typeof AuthenticateRequestSchema>;
export declare const AuthenticateResponseSchema: z.ZodObject<{
    access_token: z.ZodString;
    user: z.ZodObject<{
        username: z.ZodString;
        discriminator: z.ZodString;
        id: z.ZodString;
        avatar: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
        public_flags: z.ZodNumber;
        global_name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
    }, "strip", z.ZodTypeAny, {
        username: string;
        discriminator: string;
        id: string;
        public_flags: number;
        avatar?: string | null | undefined;
        global_name?: string | null | undefined;
    }, {
        username: string;
        discriminator: string;
        id: string;
        public_flags: number;
        avatar?: string | null | undefined;
        global_name?: string | null | undefined;
    }>;
    scopes: z.ZodArray<import("../utils/zodUtils").ZodEffectOverlayType<z.ZodDefault<z.ZodUnion<[z.ZodEnum<["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "guilds.channels.read", "gdm.join", "bot", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.permissions.update", "applications.commands.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "activities.invites.write", "relationships.read", "relationships.write", "voice", "dm_channels.read", "role_connections.write", "presences.read", "presences.write", "openid", "dm_channels.messages.read", "dm_channels.messages.write", "gateway.connect", "account.global_name.update", "payment_sources.country_code", "sdk.social_layer_presence", "sdk.social_layer", "lobbies.write", "application_identities.write"]>, z.ZodLiteral<-1>]>>>, "many">;
    expires: z.ZodString;
    application: z.ZodObject<{
        description: z.ZodString;
        icon: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
        id: z.ZodString;
        rpc_origins: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        description: string;
        name: string;
        icon?: string | null | undefined;
        rpc_origins?: string[] | undefined;
    }, {
        id: string;
        description: string;
        name: string;
        icon?: string | null | undefined;
        rpc_origins?: string[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
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
}, {
    access_token: string;
    user: {
        username: string;
        discriminator: string;
        id: string;
        public_flags: number;
        avatar?: string | null | undefined;
        global_name?: string | null | undefined;
    };
    scopes: (-1 | "identify" | "email" | "connections" | "guilds" | "guilds.join" | "guilds.members.read" | "guilds.channels.read" | "gdm.join" | "bot" | "rpc" | "rpc.notifications.read" | "rpc.voice.read" | "rpc.voice.write" | "rpc.video.read" | "rpc.video.write" | "rpc.screenshare.read" | "rpc.screenshare.write" | "rpc.activities.write" | "webhook.incoming" | "messages.read" | "applications.builds.upload" | "applications.builds.read" | "applications.commands" | "applications.commands.permissions.update" | "applications.commands.update" | "applications.store.update" | "applications.entitlements" | "activities.read" | "activities.write" | "activities.invites.write" | "relationships.read" | "relationships.write" | "voice" | "dm_channels.read" | "role_connections.write" | "presences.read" | "presences.write" | "openid" | "dm_channels.messages.read" | "dm_channels.messages.write" | "gateway.connect" | "account.global_name.update" | "payment_sources.country_code" | "sdk.social_layer_presence" | "sdk.social_layer" | "lobbies.write" | "application_identities.write" | undefined)[];
    expires: string;
    application: {
        id: string;
        description: string;
        name: string;
        icon?: string | null | undefined;
        rpc_origins?: string[] | undefined;
    };
}>;
export type AuthenticateResponse = zInfer<typeof AuthenticateResponseSchema>;
export declare const GetActivityInstanceConnectedParticipantsResponseSchema: z.ZodObject<{
    participants: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        username: z.ZodString;
        global_name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
        discriminator: z.ZodString;
        avatar: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
        flags: z.ZodNumber;
        bot: z.ZodBoolean;
        avatar_decoration_data: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            asset: z.ZodString;
            skuId: z.ZodOptional<z.ZodString>;
            expiresAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            asset: string;
            skuId?: string | undefined;
            expiresAt?: number | undefined;
        }, {
            asset: string;
            skuId?: string | undefined;
            expiresAt?: number | undefined;
        }>, z.ZodNull]>>;
        premium_type: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull]>>;
        nickname: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
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
}, {
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
export type GetActivityInstanceConnectedParticipantsResponse = zInfer<typeof GetActivityInstanceConnectedParticipantsResponseSchema>;
export declare const ShareInteractionRequestSchema: z.ZodObject<{
    command: z.ZodString;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name: string;
    }, {
        value: string;
        name: string;
    }>, "many">>;
    content: z.ZodOptional<z.ZodString>;
    require_launch_channel: z.ZodOptional<z.ZodBoolean>;
    preview_image: z.ZodOptional<z.ZodObject<{
        height: z.ZodNumber;
        url: z.ZodString;
        width: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        height: number;
        url: string;
        width: number;
    }, {
        height: number;
        url: string;
        width: number;
    }>>;
    components: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<1>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodLiteral<2>;
            style: z.ZodNumber;
            label: z.ZodOptional<z.ZodString>;
            custom_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: 2;
            style: number;
            label?: string | undefined;
            custom_id?: string | undefined;
        }, {
            type: 2;
            style: number;
            label?: string | undefined;
            custom_id?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        type: 1;
        components?: {
            type: 2;
            style: number;
            label?: string | undefined;
            custom_id?: string | undefined;
        }[] | undefined;
    }, {
        type: 1;
        components?: {
            type: 2;
            style: number;
            label?: string | undefined;
            custom_id?: string | undefined;
        }[] | undefined;
    }>, "many">>;
    pid: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export type ShareInteractionRequest = zInfer<typeof ShareInteractionRequestSchema>;
export declare const ShareInteractionResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    success: boolean;
}, {
    success: boolean;
}>;
export type ShareInteractionResponse = zInfer<typeof ShareInteractionResponseSchema>;
export declare const ShareLinkRequestSchema: z.ZodObject<{
    custom_id: z.ZodOptional<z.ZodString>;
    message: z.ZodString;
    link_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    message: string;
    custom_id?: string | undefined;
    link_id?: string | undefined;
}, {
    message: string;
    custom_id?: string | undefined;
    link_id?: string | undefined;
}>;
export type ShareLinkRequest = zInfer<typeof ShareLinkRequestSchema>;
export declare const ShareLinkResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    didCopyLink: z.ZodBoolean;
    didSendMessage: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    success: boolean;
    didCopyLink: boolean;
    didSendMessage: boolean;
}, {
    success: boolean;
    didCopyLink: boolean;
    didSendMessage: boolean;
}>;
export type ShareLinkResponse = zInfer<typeof ShareLinkResponseSchema>;
export declare const GetRelationshipsResponseSchema: z.ZodObject<{
    relationships: z.ZodArray<z.ZodObject<{
        type: z.ZodNumber;
        user: z.ZodObject<{
            id: z.ZodString;
            username: z.ZodString;
            global_name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
            discriminator: z.ZodString;
            avatar: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
            flags: z.ZodNumber;
            bot: z.ZodBoolean;
            avatar_decoration_data: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                asset: z.ZodString;
                skuId: z.ZodOptional<z.ZodString>;
                expiresAt: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                asset: string;
                skuId?: string | undefined;
                expiresAt?: number | undefined;
            }, {
                asset: string;
                skuId?: string | undefined;
                expiresAt?: number | undefined;
            }>, z.ZodNull]>>;
            premium_type: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull]>>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>;
        presence: z.ZodOptional<z.ZodObject<{
            status: z.ZodString;
            activity: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                session_id: z.ZodOptional<z.ZodString>;
                type: z.ZodOptional<z.ZodNumber>;
                name: z.ZodString;
                url: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
                application_id: z.ZodOptional<z.ZodString>;
                status_display_type: z.ZodOptional<z.ZodNumber>;
                state: z.ZodOptional<z.ZodString>;
                state_url: z.ZodOptional<z.ZodString>;
                details: z.ZodOptional<z.ZodString>;
                details_url: z.ZodOptional<z.ZodString>;
                emoji: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                    name: z.ZodString;
                    id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
                    animated: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNull]>>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    id?: string | null | undefined;
                    animated?: boolean | null | undefined;
                }, {
                    name: string;
                    id?: string | null | undefined;
                    animated?: boolean | null | undefined;
                }>, z.ZodNull]>>;
                assets: z.ZodOptional<z.ZodObject<{
                    large_image: z.ZodOptional<z.ZodString>;
                    large_text: z.ZodOptional<z.ZodString>;
                    large_url: z.ZodOptional<z.ZodString>;
                    small_image: z.ZodOptional<z.ZodString>;
                    small_text: z.ZodOptional<z.ZodString>;
                    small_url: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    large_image?: string | undefined;
                    large_text?: string | undefined;
                    large_url?: string | undefined;
                    small_image?: string | undefined;
                    small_text?: string | undefined;
                    small_url?: string | undefined;
                }, {
                    large_image?: string | undefined;
                    large_text?: string | undefined;
                    large_url?: string | undefined;
                    small_image?: string | undefined;
                    small_text?: string | undefined;
                    small_url?: string | undefined;
                }>>;
                timestamps: z.ZodOptional<z.ZodObject<{
                    start: z.ZodOptional<z.ZodNumber>;
                    end: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    start?: number | undefined;
                    end?: number | undefined;
                }, {
                    start?: number | undefined;
                    end?: number | undefined;
                }>>;
                party: z.ZodOptional<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    size: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                    privacy: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    size?: number[] | undefined;
                    privacy?: number | undefined;
                }, {
                    id?: string | undefined;
                    size?: number[] | undefined;
                    privacy?: number | undefined;
                }>>;
                secrets: z.ZodOptional<z.ZodObject<{
                    match: z.ZodOptional<z.ZodString>;
                    join: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    join?: string | undefined;
                    match?: string | undefined;
                }, {
                    join?: string | undefined;
                    match?: string | undefined;
                }>>;
                sync_id: z.ZodOptional<z.ZodString>;
                created_at: z.ZodOptional<z.ZodNumber>;
                instance: z.ZodOptional<z.ZodBoolean>;
                flags: z.ZodOptional<z.ZodNumber>;
                metadata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
                platform: z.ZodOptional<z.ZodString>;
                supported_platforms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                buttons: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                hangStatus: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
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
            }, {
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
            }>, z.ZodNull]>>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
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
}, {
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
export type GetRelationshipsResponse = zInfer<typeof GetRelationshipsResponseSchema>;
export declare const InviteUserEmbeddedRequestSchema: z.ZodObject<{
    user_id: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    user_id: string;
    content?: string | undefined;
}, {
    user_id: string;
    content?: string | undefined;
}>;
export type InviteUserEmbeddedRequest = zInfer<typeof InviteUserEmbeddedRequestSchema>;
export declare const GetUserRequestSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type GetUserRequest = zInfer<typeof GetUserRequestSchema>;
export declare const GetUserResponseSchema: z.ZodUnion<[z.ZodObject<{
    id: z.ZodString;
    username: z.ZodString;
    global_name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
    discriminator: z.ZodString;
    avatar: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
    flags: z.ZodNumber;
    bot: z.ZodBoolean;
    avatar_decoration_data: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        asset: z.ZodString;
        skuId: z.ZodOptional<z.ZodString>;
        expiresAt: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        asset: string;
        skuId?: string | undefined;
        expiresAt?: number | undefined;
    }, {
        asset: string;
        skuId?: string | undefined;
        expiresAt?: number | undefined;
    }>, z.ZodNull]>>;
    premium_type: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull]>>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>, z.ZodNull]>;
export type GetUserResponse = zInfer<typeof GetUserResponseSchema>;
export declare const GetQuestEnrollmentStatusRequestSchema: z.ZodObject<{
    quest_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    quest_id: string;
}, {
    quest_id: string;
}>;
export type GetQuestEnrollmentStatusRequest = zInfer<typeof GetQuestEnrollmentStatusRequestSchema>;
export declare const GetQuestEnrollmentStatusResponseSchema: z.ZodObject<{
    quest_id: z.ZodString;
    is_enrolled: z.ZodBoolean;
    enrolled_at: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
}, "strip", z.ZodTypeAny, {
    quest_id: string;
    is_enrolled: boolean;
    enrolled_at?: string | null | undefined;
}, {
    quest_id: string;
    is_enrolled: boolean;
    enrolled_at?: string | null | undefined;
}>;
export type GetQuestEnrollmentStatusResponse = zInfer<typeof GetQuestEnrollmentStatusResponseSchema>;
export declare const QuestStartTimerRequestSchema: z.ZodObject<{
    quest_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    quest_id: string;
}, {
    quest_id: string;
}>;
export type QuestStartTimerRequest = zInfer<typeof QuestStartTimerRequestSchema>;
export declare const QuestStartTimerResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    success: boolean;
}, {
    success: boolean;
}>;
export type QuestStartTimerResponse = zInfer<typeof QuestStartTimerResponseSchema>;
/**
 * RPC Commands which support schemas.
 */
export declare enum Command {
    INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD",
    OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG",
    AUTHENTICATE = "AUTHENTICATE",
    GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS",
    SHARE_INTERACTION = "SHARE_INTERACTION",
    SHARE_LINK = "SHARE_LINK",
    GET_RELATIONSHIPS = "GET_RELATIONSHIPS",
    INVITE_USER_EMBEDDED = "INVITE_USER_EMBEDDED",
    GET_USER = "GET_USER",
    GET_QUEST_ENROLLMENT_STATUS = "GET_QUEST_ENROLLMENT_STATUS",
    QUEST_START_TIMER = "QUEST_START_TIMER"
}
/**
 * Request & Response schemas for each supported RPC Command.
 */
export declare const Schemas: {
    readonly INITIATE_IMAGE_UPLOAD: {
        readonly request: z.ZodVoid;
        readonly response: z.ZodObject<{
            image_url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            image_url: string;
        }, {
            image_url: string;
        }>;
    };
    readonly OPEN_SHARE_MOMENT_DIALOG: {
        readonly request: z.ZodObject<{
            mediaUrl: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            mediaUrl: string;
        }, {
            mediaUrl: string;
        }>;
        readonly response: z.ZodNullable<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>>;
    };
    readonly AUTHENTICATE: {
        readonly request: z.ZodObject<{
            access_token: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
        }, "strip", z.ZodTypeAny, {
            access_token?: string | null | undefined;
        }, {
            access_token?: string | null | undefined;
        }>;
        readonly response: z.ZodObject<{
            access_token: z.ZodString;
            user: z.ZodObject<{
                username: z.ZodString;
                discriminator: z.ZodString;
                id: z.ZodString;
                avatar: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
                public_flags: z.ZodNumber;
                global_name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
            }, "strip", z.ZodTypeAny, {
                username: string;
                discriminator: string;
                id: string;
                public_flags: number;
                avatar?: string | null | undefined;
                global_name?: string | null | undefined;
            }, {
                username: string;
                discriminator: string;
                id: string;
                public_flags: number;
                avatar?: string | null | undefined;
                global_name?: string | null | undefined;
            }>;
            scopes: z.ZodArray<import("../utils/zodUtils").ZodEffectOverlayType<z.ZodDefault<z.ZodUnion<[z.ZodEnum<["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "guilds.channels.read", "gdm.join", "bot", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.permissions.update", "applications.commands.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "activities.invites.write", "relationships.read", "relationships.write", "voice", "dm_channels.read", "role_connections.write", "presences.read", "presences.write", "openid", "dm_channels.messages.read", "dm_channels.messages.write", "gateway.connect", "account.global_name.update", "payment_sources.country_code", "sdk.social_layer_presence", "sdk.social_layer", "lobbies.write", "application_identities.write"]>, z.ZodLiteral<-1>]>>>, "many">;
            expires: z.ZodString;
            application: z.ZodObject<{
                description: z.ZodString;
                icon: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
                id: z.ZodString;
                rpc_origins: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                description: string;
                name: string;
                icon?: string | null | undefined;
                rpc_origins?: string[] | undefined;
            }, {
                id: string;
                description: string;
                name: string;
                icon?: string | null | undefined;
                rpc_origins?: string[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
            access_token: string;
            user: {
                username: string;
                discriminator: string;
                id: string;
                public_flags: number;
                avatar?: string | null | undefined;
                global_name?: string | null | undefined;
            };
            scopes: (-1 | "identify" | "email" | "connections" | "guilds" | "guilds.join" | "guilds.members.read" | "guilds.channels.read" | "gdm.join" | "bot" | "rpc" | "rpc.notifications.read" | "rpc.voice.read" | "rpc.voice.write" | "rpc.video.read" | "rpc.video.write" | "rpc.screenshare.read" | "rpc.screenshare.write" | "rpc.activities.write" | "webhook.incoming" | "messages.read" | "applications.builds.upload" | "applications.builds.read" | "applications.commands" | "applications.commands.permissions.update" | "applications.commands.update" | "applications.store.update" | "applications.entitlements" | "activities.read" | "activities.write" | "activities.invites.write" | "relationships.read" | "relationships.write" | "voice" | "dm_channels.read" | "role_connections.write" | "presences.read" | "presences.write" | "openid" | "dm_channels.messages.read" | "dm_channels.messages.write" | "gateway.connect" | "account.global_name.update" | "payment_sources.country_code" | "sdk.social_layer_presence" | "sdk.social_layer" | "lobbies.write" | "application_identities.write" | undefined)[];
            expires: string;
            application: {
                id: string;
                description: string;
                name: string;
                icon?: string | null | undefined;
                rpc_origins?: string[] | undefined;
            };
        }>;
    };
    readonly GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS: {
        readonly request: z.ZodVoid;
        readonly response: z.ZodObject<{
            participants: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                username: z.ZodString;
                global_name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
                discriminator: z.ZodString;
                avatar: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
                flags: z.ZodNumber;
                bot: z.ZodBoolean;
                avatar_decoration_data: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                    asset: z.ZodString;
                    skuId: z.ZodOptional<z.ZodString>;
                    expiresAt: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    asset: string;
                    skuId?: string | undefined;
                    expiresAt?: number | undefined;
                }, {
                    asset: string;
                    skuId?: string | undefined;
                    expiresAt?: number | undefined;
                }>, z.ZodNull]>>;
                premium_type: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull]>>;
                nickname: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
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
            }, {
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
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
    };
    readonly SHARE_INTERACTION: {
        readonly request: z.ZodObject<{
            command: z.ZodString;
            options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name: string;
            }, {
                value: string;
                name: string;
            }>, "many">>;
            content: z.ZodOptional<z.ZodString>;
            require_launch_channel: z.ZodOptional<z.ZodBoolean>;
            preview_image: z.ZodOptional<z.ZodObject<{
                height: z.ZodNumber;
                url: z.ZodString;
                width: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                height: number;
                url: string;
                width: number;
            }, {
                height: number;
                url: string;
                width: number;
            }>>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodLiteral<1>;
                components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    type: z.ZodLiteral<2>;
                    style: z.ZodNumber;
                    label: z.ZodOptional<z.ZodString>;
                    custom_id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type: 2;
                    style: number;
                    label?: string | undefined;
                    custom_id?: string | undefined;
                }, {
                    type: 2;
                    style: number;
                    label?: string | undefined;
                    custom_id?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                type: 1;
                components?: {
                    type: 2;
                    style: number;
                    label?: string | undefined;
                    custom_id?: string | undefined;
                }[] | undefined;
            }, {
                type: 1;
                components?: {
                    type: 2;
                    style: number;
                    label?: string | undefined;
                    custom_id?: string | undefined;
                }[] | undefined;
            }>, "many">>;
            pid: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>;
        readonly response: z.ZodObject<{
            success: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            success: boolean;
        }, {
            success: boolean;
        }>;
    };
    readonly SHARE_LINK: {
        readonly request: z.ZodObject<{
            custom_id: z.ZodOptional<z.ZodString>;
            message: z.ZodString;
            link_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            message: string;
            custom_id?: string | undefined;
            link_id?: string | undefined;
        }, {
            message: string;
            custom_id?: string | undefined;
            link_id?: string | undefined;
        }>;
        readonly response: z.ZodObject<{
            success: z.ZodBoolean;
            didCopyLink: z.ZodBoolean;
            didSendMessage: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            success: boolean;
            didCopyLink: boolean;
            didSendMessage: boolean;
        }, {
            success: boolean;
            didCopyLink: boolean;
            didSendMessage: boolean;
        }>;
    };
    readonly GET_RELATIONSHIPS: {
        readonly request: z.ZodVoid;
        readonly response: z.ZodObject<{
            relationships: z.ZodArray<z.ZodObject<{
                type: z.ZodNumber;
                user: z.ZodObject<{
                    id: z.ZodString;
                    username: z.ZodString;
                    global_name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
                    discriminator: z.ZodString;
                    avatar: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
                    flags: z.ZodNumber;
                    bot: z.ZodBoolean;
                    avatar_decoration_data: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                        asset: z.ZodString;
                        skuId: z.ZodOptional<z.ZodString>;
                        expiresAt: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        asset: string;
                        skuId?: string | undefined;
                        expiresAt?: number | undefined;
                    }, {
                        asset: string;
                        skuId?: string | undefined;
                        expiresAt?: number | undefined;
                    }>, z.ZodNull]>>;
                    premium_type: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull]>>;
                }, "strip", z.ZodTypeAny, {
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
                }, {
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
                }>;
                presence: z.ZodOptional<z.ZodObject<{
                    status: z.ZodString;
                    activity: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                        session_id: z.ZodOptional<z.ZodString>;
                        type: z.ZodOptional<z.ZodNumber>;
                        name: z.ZodString;
                        url: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
                        application_id: z.ZodOptional<z.ZodString>;
                        status_display_type: z.ZodOptional<z.ZodNumber>;
                        state: z.ZodOptional<z.ZodString>;
                        state_url: z.ZodOptional<z.ZodString>;
                        details: z.ZodOptional<z.ZodString>;
                        details_url: z.ZodOptional<z.ZodString>;
                        emoji: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                            name: z.ZodString;
                            id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
                            animated: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNull]>>;
                        }, "strip", z.ZodTypeAny, {
                            name: string;
                            id?: string | null | undefined;
                            animated?: boolean | null | undefined;
                        }, {
                            name: string;
                            id?: string | null | undefined;
                            animated?: boolean | null | undefined;
                        }>, z.ZodNull]>>;
                        assets: z.ZodOptional<z.ZodObject<{
                            large_image: z.ZodOptional<z.ZodString>;
                            large_text: z.ZodOptional<z.ZodString>;
                            large_url: z.ZodOptional<z.ZodString>;
                            small_image: z.ZodOptional<z.ZodString>;
                            small_text: z.ZodOptional<z.ZodString>;
                            small_url: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            large_image?: string | undefined;
                            large_text?: string | undefined;
                            large_url?: string | undefined;
                            small_image?: string | undefined;
                            small_text?: string | undefined;
                            small_url?: string | undefined;
                        }, {
                            large_image?: string | undefined;
                            large_text?: string | undefined;
                            large_url?: string | undefined;
                            small_image?: string | undefined;
                            small_text?: string | undefined;
                            small_url?: string | undefined;
                        }>>;
                        timestamps: z.ZodOptional<z.ZodObject<{
                            start: z.ZodOptional<z.ZodNumber>;
                            end: z.ZodOptional<z.ZodNumber>;
                        }, "strip", z.ZodTypeAny, {
                            start?: number | undefined;
                            end?: number | undefined;
                        }, {
                            start?: number | undefined;
                            end?: number | undefined;
                        }>>;
                        party: z.ZodOptional<z.ZodObject<{
                            id: z.ZodOptional<z.ZodString>;
                            size: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                            privacy: z.ZodOptional<z.ZodNumber>;
                        }, "strip", z.ZodTypeAny, {
                            id?: string | undefined;
                            size?: number[] | undefined;
                            privacy?: number | undefined;
                        }, {
                            id?: string | undefined;
                            size?: number[] | undefined;
                            privacy?: number | undefined;
                        }>>;
                        secrets: z.ZodOptional<z.ZodObject<{
                            match: z.ZodOptional<z.ZodString>;
                            join: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            join?: string | undefined;
                            match?: string | undefined;
                        }, {
                            join?: string | undefined;
                            match?: string | undefined;
                        }>>;
                        sync_id: z.ZodOptional<z.ZodString>;
                        created_at: z.ZodOptional<z.ZodNumber>;
                        instance: z.ZodOptional<z.ZodBoolean>;
                        flags: z.ZodOptional<z.ZodNumber>;
                        metadata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
                        platform: z.ZodOptional<z.ZodString>;
                        supported_platforms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                        buttons: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                        hangStatus: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
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
                    }, {
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
                    }>, z.ZodNull]>>;
                }, "strip", z.ZodTypeAny, {
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
                }, {
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
                }>>;
            }, "strip", z.ZodTypeAny, {
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
            }, {
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
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
    };
    readonly INVITE_USER_EMBEDDED: {
        readonly request: z.ZodObject<{
            user_id: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_id: string;
            content?: string | undefined;
        }, {
            user_id: string;
            content?: string | undefined;
        }>;
        readonly response: z.ZodNullable<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>>;
    };
    readonly GET_USER: {
        readonly request: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        readonly response: z.ZodUnion<[z.ZodObject<{
            id: z.ZodString;
            username: z.ZodString;
            global_name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
            discriminator: z.ZodString;
            avatar: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
            flags: z.ZodNumber;
            bot: z.ZodBoolean;
            avatar_decoration_data: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                asset: z.ZodString;
                skuId: z.ZodOptional<z.ZodString>;
                expiresAt: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                asset: string;
                skuId?: string | undefined;
                expiresAt?: number | undefined;
            }, {
                asset: string;
                skuId?: string | undefined;
                expiresAt?: number | undefined;
            }>, z.ZodNull]>>;
            premium_type: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull]>>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, z.ZodNull]>;
    };
    readonly GET_QUEST_ENROLLMENT_STATUS: {
        readonly request: z.ZodObject<{
            quest_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            quest_id: string;
        }, {
            quest_id: string;
        }>;
        readonly response: z.ZodObject<{
            quest_id: z.ZodString;
            is_enrolled: z.ZodBoolean;
            enrolled_at: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
        }, "strip", z.ZodTypeAny, {
            quest_id: string;
            is_enrolled: boolean;
            enrolled_at?: string | null | undefined;
        }, {
            quest_id: string;
            is_enrolled: boolean;
            enrolled_at?: string | null | undefined;
        }>;
    };
    readonly QUEST_START_TIMER: {
        readonly request: z.ZodObject<{
            quest_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            quest_id: string;
        }, {
            quest_id: string;
        }>;
        readonly response: z.ZodObject<{
            success: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            success: boolean;
        }, {
            success: boolean;
        }>;
    };
};
