import * as zod from 'zod';
import { Orientation } from '../Constants';
import { Commands } from './common';
export declare const ERROR = "ERROR";
export declare enum Events {
    READY = "READY",
    VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE",
    SPEAKING_START = "SPEAKING_START",
    SPEAKING_STOP = "SPEAKING_STOP",
    ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE",
    ORIENTATION_UPDATE = "ORIENTATION_UPDATE",
    CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE",
    CURRENT_GUILD_MEMBER_UPDATE = "CURRENT_GUILD_MEMBER_UPDATE",
    ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE",
    THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE",
    ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE",
    RELATIONSHIP_UPDATE = "RELATIONSHIP_UPDATE",
    ACTIVITY_JOIN = "ACTIVITY_JOIN",
    QUEST_ENROLLMENT_STATUS_UPDATE = "QUEST_ENROLLMENT_STATUS_UPDATE"
}
export declare const DispatchEventFrame: zod.ZodObject<zod.objectUtil.extendShape<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, {
    evt: zod.ZodNativeEnum<typeof Events>;
    nonce: zod.ZodNullable<zod.ZodString>;
    cmd: zod.ZodLiteral<"DISPATCH">;
    data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
}>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, {
    evt: zod.ZodNativeEnum<typeof Events>;
    nonce: zod.ZodNullable<zod.ZodString>;
    cmd: zod.ZodLiteral<"DISPATCH">;
    data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
}>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, {
    evt: zod.ZodNativeEnum<typeof Events>;
    nonce: zod.ZodNullable<zod.ZodString>;
    cmd: zod.ZodLiteral<"DISPATCH">;
    data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
}>, zod.ZodTypeAny, "passthrough">>;
export interface EventArgs<Z extends zod.AnyZodObject = zod.AnyZodObject> {
    payload: Z;
    subscribeArgs?: Z;
}
export type EventPayloadData<K extends keyof typeof EventSchema> = zod.infer<(typeof EventSchema)[K]['payload']>['data'];
export declare const ErrorEvent: zod.ZodObject<zod.objectUtil.extendShape<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, {
    evt: zod.ZodLiteral<"ERROR">;
    data: zod.ZodObject<{
        code: zod.ZodNumber;
        message: zod.ZodOptional<zod.ZodString>;
    }, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
        code: zod.ZodNumber;
        message: zod.ZodOptional<zod.ZodString>;
    }, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
        code: zod.ZodNumber;
        message: zod.ZodOptional<zod.ZodString>;
    }, zod.ZodTypeAny, "passthrough">>;
    cmd: zod.ZodNativeEnum<typeof Commands>;
    nonce: zod.ZodNullable<zod.ZodString>;
}>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, {
    evt: zod.ZodLiteral<"ERROR">;
    data: zod.ZodObject<{
        code: zod.ZodNumber;
        message: zod.ZodOptional<zod.ZodString>;
    }, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
        code: zod.ZodNumber;
        message: zod.ZodOptional<zod.ZodString>;
    }, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
        code: zod.ZodNumber;
        message: zod.ZodOptional<zod.ZodString>;
    }, zod.ZodTypeAny, "passthrough">>;
    cmd: zod.ZodNativeEnum<typeof Commands>;
    nonce: zod.ZodNullable<zod.ZodString>;
}>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, {
    evt: zod.ZodLiteral<"ERROR">;
    data: zod.ZodObject<{
        code: zod.ZodNumber;
        message: zod.ZodOptional<zod.ZodString>;
    }, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
        code: zod.ZodNumber;
        message: zod.ZodOptional<zod.ZodString>;
    }, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
        code: zod.ZodNumber;
        message: zod.ZodOptional<zod.ZodString>;
    }, zod.ZodTypeAny, "passthrough">>;
    cmd: zod.ZodNativeEnum<typeof Commands>;
    nonce: zod.ZodNullable<zod.ZodString>;
}>, zod.ZodTypeAny, "passthrough">>;
export declare const OtherEvent: zod.ZodObject<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, {
    evt: zod.ZodNativeEnum<typeof Events>;
    nonce: zod.ZodNullable<zod.ZodString>;
    cmd: zod.ZodLiteral<"DISPATCH">;
    data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
}>, {
    evt: zod.ZodString;
}>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, {
    evt: zod.ZodNativeEnum<typeof Events>;
    nonce: zod.ZodNullable<zod.ZodString>;
    cmd: zod.ZodLiteral<"DISPATCH">;
    data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
}>, {
    evt: zod.ZodString;
}>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, {
    evt: zod.ZodNativeEnum<typeof Events>;
    nonce: zod.ZodNullable<zod.ZodString>;
    cmd: zod.ZodLiteral<"DISPATCH">;
    data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
}>, {
    evt: zod.ZodString;
}>, zod.ZodTypeAny, "passthrough">>;
export declare const EventFrame: zod.ZodUnion<[zod.ZodObject<zod.objectUtil.extendShape<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, {
    evt: zod.ZodNativeEnum<typeof Events>;
    nonce: zod.ZodNullable<zod.ZodString>;
    cmd: zod.ZodLiteral<"DISPATCH">;
    data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
}>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, {
    evt: zod.ZodNativeEnum<typeof Events>;
    nonce: zod.ZodNullable<zod.ZodString>;
    cmd: zod.ZodLiteral<"DISPATCH">;
    data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
}>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, {
    evt: zod.ZodNativeEnum<typeof Events>;
    nonce: zod.ZodNullable<zod.ZodString>;
    cmd: zod.ZodLiteral<"DISPATCH">;
    data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
}>, zod.ZodTypeAny, "passthrough">>, zod.ZodObject<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, {
    evt: zod.ZodNativeEnum<typeof Events>;
    nonce: zod.ZodNullable<zod.ZodString>;
    cmd: zod.ZodLiteral<"DISPATCH">;
    data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
}>, {
    evt: zod.ZodString;
}>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, {
    evt: zod.ZodNativeEnum<typeof Events>;
    nonce: zod.ZodNullable<zod.ZodString>;
    cmd: zod.ZodLiteral<"DISPATCH">;
    data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
}>, {
    evt: zod.ZodString;
}>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, {
    evt: zod.ZodNativeEnum<typeof Events>;
    nonce: zod.ZodNullable<zod.ZodString>;
    cmd: zod.ZodLiteral<"DISPATCH">;
    data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
}>, {
    evt: zod.ZodString;
}>, zod.ZodTypeAny, "passthrough">>, zod.ZodObject<zod.objectUtil.extendShape<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, {
    evt: zod.ZodLiteral<"ERROR">;
    data: zod.ZodObject<{
        code: zod.ZodNumber;
        message: zod.ZodOptional<zod.ZodString>;
    }, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
        code: zod.ZodNumber;
        message: zod.ZodOptional<zod.ZodString>;
    }, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
        code: zod.ZodNumber;
        message: zod.ZodOptional<zod.ZodString>;
    }, zod.ZodTypeAny, "passthrough">>;
    cmd: zod.ZodNativeEnum<typeof Commands>;
    nonce: zod.ZodNullable<zod.ZodString>;
}>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, {
    evt: zod.ZodLiteral<"ERROR">;
    data: zod.ZodObject<{
        code: zod.ZodNumber;
        message: zod.ZodOptional<zod.ZodString>;
    }, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
        code: zod.ZodNumber;
        message: zod.ZodOptional<zod.ZodString>;
    }, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
        code: zod.ZodNumber;
        message: zod.ZodOptional<zod.ZodString>;
    }, zod.ZodTypeAny, "passthrough">>;
    cmd: zod.ZodNativeEnum<typeof Commands>;
    nonce: zod.ZodNullable<zod.ZodString>;
}>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, {
    evt: zod.ZodLiteral<"ERROR">;
    data: zod.ZodObject<{
        code: zod.ZodNumber;
        message: zod.ZodOptional<zod.ZodString>;
    }, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
        code: zod.ZodNumber;
        message: zod.ZodOptional<zod.ZodString>;
    }, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
        code: zod.ZodNumber;
        message: zod.ZodOptional<zod.ZodString>;
    }, zod.ZodTypeAny, "passthrough">>;
    cmd: zod.ZodNativeEnum<typeof Commands>;
    nonce: zod.ZodNullable<zod.ZodString>;
}>, zod.ZodTypeAny, "passthrough">>]>;
export declare const VoiceConnectionStatusStateObject: {
    readonly UNHANDLED: -1;
    readonly DISCONNECTED: "DISCONNECTED";
    readonly AWAITING_ENDPOINT: "AWAITING_ENDPOINT";
    readonly AUTHENTICATING: "AUTHENTICATING";
    readonly CONNECTING: "CONNECTING";
    readonly CONNECTED: "CONNECTED";
    readonly VOICE_DISCONNECTED: "VOICE_DISCONNECTED";
    readonly VOICE_CONNECTING: "VOICE_CONNECTING";
    readonly VOICE_CONNECTED: "VOICE_CONNECTED";
    readonly NO_ROUTE: "NO_ROUTE";
    readonly ICE_CHECKING: "ICE_CHECKING";
};
export declare const ActivityJoinIntentObject: {
    readonly UNHANDLED: -1;
    readonly PLAY: 0;
    readonly SPECTATE: 1;
};
export declare function parseEventPayload<K extends keyof typeof EventSchema = keyof typeof EventSchema>(data: zod.infer<typeof EventFrame>): zod.infer<(typeof EventSchema)[K]['payload']>;
export declare const EventSchema: {
    /**
     * @description
     * The READY event is emitted by Discord's RPC server in reply to a client
     * initiating the RPC handshake. The event includes information about
     * - the rpc server version
     * - the discord client configuration
     * - the (basic) user object
     *
     * Unlike other events, READY will only be omitted once, immediately after the
     * Embedded App SDK is initialized
     *
     * # Supported Platforms
     * | Web | iOS | Android |
     * |-----|-----|---------|
     * | ✅  | ✅  | ✅      |
     *
     * Required scopes: []
     *
     */
    READY: {
        payload: zod.ZodObject<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.READY>;
            data: zod.ZodObject<{
                v: zod.ZodNumber;
                config: zod.ZodObject<{
                    cdn_host: zod.ZodOptional<zod.ZodString>;
                    api_endpoint: zod.ZodString;
                    environment: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    api_endpoint: string;
                    environment: string;
                    cdn_host?: string | undefined;
                }, {
                    api_endpoint: string;
                    environment: string;
                    cdn_host?: string | undefined;
                }>;
                user: zod.ZodOptional<zod.ZodObject<{
                    id: zod.ZodString;
                    username: zod.ZodString;
                    discriminator: zod.ZodString;
                    avatar: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    username: string;
                    discriminator: string;
                    id: string;
                    avatar?: string | undefined;
                }, {
                    username: string;
                    discriminator: string;
                    id: string;
                    avatar?: string | undefined;
                }>>;
            }, "strip", zod.ZodTypeAny, {
                v: number;
                config: {
                    api_endpoint: string;
                    environment: string;
                    cdn_host?: string | undefined;
                };
                user?: {
                    username: string;
                    discriminator: string;
                    id: string;
                    avatar?: string | undefined;
                } | undefined;
            }, {
                v: number;
                config: {
                    api_endpoint: string;
                    environment: string;
                    cdn_host?: string | undefined;
                };
                user?: {
                    username: string;
                    discriminator: string;
                    id: string;
                    avatar?: string | undefined;
                } | undefined;
            }>;
        }>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.READY>;
            data: zod.ZodObject<{
                v: zod.ZodNumber;
                config: zod.ZodObject<{
                    cdn_host: zod.ZodOptional<zod.ZodString>;
                    api_endpoint: zod.ZodString;
                    environment: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    api_endpoint: string;
                    environment: string;
                    cdn_host?: string | undefined;
                }, {
                    api_endpoint: string;
                    environment: string;
                    cdn_host?: string | undefined;
                }>;
                user: zod.ZodOptional<zod.ZodObject<{
                    id: zod.ZodString;
                    username: zod.ZodString;
                    discriminator: zod.ZodString;
                    avatar: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    username: string;
                    discriminator: string;
                    id: string;
                    avatar?: string | undefined;
                }, {
                    username: string;
                    discriminator: string;
                    id: string;
                    avatar?: string | undefined;
                }>>;
            }, "strip", zod.ZodTypeAny, {
                v: number;
                config: {
                    api_endpoint: string;
                    environment: string;
                    cdn_host?: string | undefined;
                };
                user?: {
                    username: string;
                    discriminator: string;
                    id: string;
                    avatar?: string | undefined;
                } | undefined;
            }, {
                v: number;
                config: {
                    api_endpoint: string;
                    environment: string;
                    cdn_host?: string | undefined;
                };
                user?: {
                    username: string;
                    discriminator: string;
                    id: string;
                    avatar?: string | undefined;
                } | undefined;
            }>;
        }>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.READY>;
            data: zod.ZodObject<{
                v: zod.ZodNumber;
                config: zod.ZodObject<{
                    cdn_host: zod.ZodOptional<zod.ZodString>;
                    api_endpoint: zod.ZodString;
                    environment: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    api_endpoint: string;
                    environment: string;
                    cdn_host?: string | undefined;
                }, {
                    api_endpoint: string;
                    environment: string;
                    cdn_host?: string | undefined;
                }>;
                user: zod.ZodOptional<zod.ZodObject<{
                    id: zod.ZodString;
                    username: zod.ZodString;
                    discriminator: zod.ZodString;
                    avatar: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    username: string;
                    discriminator: string;
                    id: string;
                    avatar?: string | undefined;
                }, {
                    username: string;
                    discriminator: string;
                    id: string;
                    avatar?: string | undefined;
                }>>;
            }, "strip", zod.ZodTypeAny, {
                v: number;
                config: {
                    api_endpoint: string;
                    environment: string;
                    cdn_host?: string | undefined;
                };
                user?: {
                    username: string;
                    discriminator: string;
                    id: string;
                    avatar?: string | undefined;
                } | undefined;
            }, {
                v: number;
                config: {
                    api_endpoint: string;
                    environment: string;
                    cdn_host?: string | undefined;
                };
                user?: {
                    username: string;
                    discriminator: string;
                    id: string;
                    avatar?: string | undefined;
                } | undefined;
            }>;
        }>, zod.ZodTypeAny, "passthrough">>;
    };
    VOICE_STATE_UPDATE: {
        payload: zod.ZodObject<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.VOICE_STATE_UPDATE>;
            data: zod.ZodObject<{
                mute: zod.ZodBoolean;
                nick: zod.ZodString;
                user: zod.ZodObject<{
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
                }>;
                voice_state: zod.ZodObject<{
                    mute: zod.ZodBoolean;
                    deaf: zod.ZodBoolean;
                    self_mute: zod.ZodBoolean;
                    self_deaf: zod.ZodBoolean;
                    suppress: zod.ZodBoolean;
                }, "strip", zod.ZodTypeAny, {
                    deaf: boolean;
                    mute: boolean;
                    self_mute: boolean;
                    self_deaf: boolean;
                    suppress: boolean;
                }, {
                    deaf: boolean;
                    mute: boolean;
                    self_mute: boolean;
                    self_deaf: boolean;
                    suppress: boolean;
                }>;
                volume: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
            }, {
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
            }>;
        }>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.VOICE_STATE_UPDATE>;
            data: zod.ZodObject<{
                mute: zod.ZodBoolean;
                nick: zod.ZodString;
                user: zod.ZodObject<{
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
                }>;
                voice_state: zod.ZodObject<{
                    mute: zod.ZodBoolean;
                    deaf: zod.ZodBoolean;
                    self_mute: zod.ZodBoolean;
                    self_deaf: zod.ZodBoolean;
                    suppress: zod.ZodBoolean;
                }, "strip", zod.ZodTypeAny, {
                    deaf: boolean;
                    mute: boolean;
                    self_mute: boolean;
                    self_deaf: boolean;
                    suppress: boolean;
                }, {
                    deaf: boolean;
                    mute: boolean;
                    self_mute: boolean;
                    self_deaf: boolean;
                    suppress: boolean;
                }>;
                volume: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
            }, {
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
            }>;
        }>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.VOICE_STATE_UPDATE>;
            data: zod.ZodObject<{
                mute: zod.ZodBoolean;
                nick: zod.ZodString;
                user: zod.ZodObject<{
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
                }>;
                voice_state: zod.ZodObject<{
                    mute: zod.ZodBoolean;
                    deaf: zod.ZodBoolean;
                    self_mute: zod.ZodBoolean;
                    self_deaf: zod.ZodBoolean;
                    suppress: zod.ZodBoolean;
                }, "strip", zod.ZodTypeAny, {
                    deaf: boolean;
                    mute: boolean;
                    self_mute: boolean;
                    self_deaf: boolean;
                    suppress: boolean;
                }, {
                    deaf: boolean;
                    mute: boolean;
                    self_mute: boolean;
                    self_deaf: boolean;
                    suppress: boolean;
                }>;
                volume: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
            }, {
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
            }>;
        }>, zod.ZodTypeAny, "passthrough">>;
        subscribeArgs: zod.ZodObject<{
            channel_id: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            channel_id: string;
        }, {
            channel_id: string;
        }>;
    };
    SPEAKING_START: {
        payload: zod.ZodObject<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.SPEAKING_START>;
            data: zod.ZodObject<{
                lobby_id: zod.ZodOptional<zod.ZodString>;
                channel_id: zod.ZodOptional<zod.ZodString>;
                user_id: zod.ZodString;
            }, "strip", zod.ZodTypeAny, {
                user_id: string;
                channel_id?: string | undefined;
                lobby_id?: string | undefined;
            }, {
                user_id: string;
                channel_id?: string | undefined;
                lobby_id?: string | undefined;
            }>;
        }>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.SPEAKING_START>;
            data: zod.ZodObject<{
                lobby_id: zod.ZodOptional<zod.ZodString>;
                channel_id: zod.ZodOptional<zod.ZodString>;
                user_id: zod.ZodString;
            }, "strip", zod.ZodTypeAny, {
                user_id: string;
                channel_id?: string | undefined;
                lobby_id?: string | undefined;
            }, {
                user_id: string;
                channel_id?: string | undefined;
                lobby_id?: string | undefined;
            }>;
        }>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.SPEAKING_START>;
            data: zod.ZodObject<{
                lobby_id: zod.ZodOptional<zod.ZodString>;
                channel_id: zod.ZodOptional<zod.ZodString>;
                user_id: zod.ZodString;
            }, "strip", zod.ZodTypeAny, {
                user_id: string;
                channel_id?: string | undefined;
                lobby_id?: string | undefined;
            }, {
                user_id: string;
                channel_id?: string | undefined;
                lobby_id?: string | undefined;
            }>;
        }>, zod.ZodTypeAny, "passthrough">>;
        subscribeArgs: zod.ZodObject<{
            lobby_id: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            channel_id: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
        }, "strip", zod.ZodTypeAny, {
            channel_id?: string | null | undefined;
            lobby_id?: string | null | undefined;
        }, {
            channel_id?: string | null | undefined;
            lobby_id?: string | null | undefined;
        }>;
    };
    SPEAKING_STOP: {
        payload: zod.ZodObject<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.SPEAKING_STOP>;
            data: zod.ZodObject<{
                lobby_id: zod.ZodOptional<zod.ZodString>;
                channel_id: zod.ZodOptional<zod.ZodString>;
                user_id: zod.ZodString;
            }, "strip", zod.ZodTypeAny, {
                user_id: string;
                channel_id?: string | undefined;
                lobby_id?: string | undefined;
            }, {
                user_id: string;
                channel_id?: string | undefined;
                lobby_id?: string | undefined;
            }>;
        }>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.SPEAKING_STOP>;
            data: zod.ZodObject<{
                lobby_id: zod.ZodOptional<zod.ZodString>;
                channel_id: zod.ZodOptional<zod.ZodString>;
                user_id: zod.ZodString;
            }, "strip", zod.ZodTypeAny, {
                user_id: string;
                channel_id?: string | undefined;
                lobby_id?: string | undefined;
            }, {
                user_id: string;
                channel_id?: string | undefined;
                lobby_id?: string | undefined;
            }>;
        }>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.SPEAKING_STOP>;
            data: zod.ZodObject<{
                lobby_id: zod.ZodOptional<zod.ZodString>;
                channel_id: zod.ZodOptional<zod.ZodString>;
                user_id: zod.ZodString;
            }, "strip", zod.ZodTypeAny, {
                user_id: string;
                channel_id?: string | undefined;
                lobby_id?: string | undefined;
            }, {
                user_id: string;
                channel_id?: string | undefined;
                lobby_id?: string | undefined;
            }>;
        }>, zod.ZodTypeAny, "passthrough">>;
        subscribeArgs: zod.ZodObject<{
            lobby_id: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            channel_id: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
        }, "strip", zod.ZodTypeAny, {
            channel_id?: string | null | undefined;
            lobby_id?: string | null | undefined;
        }, {
            channel_id?: string | null | undefined;
            lobby_id?: string | null | undefined;
        }>;
    };
    ACTIVITY_LAYOUT_MODE_UPDATE: {
        payload: zod.ZodObject<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.ACTIVITY_LAYOUT_MODE_UPDATE>;
            data: zod.ZodObject<{
                layout_mode: zod.ZodEffects<zod.ZodType<0 | 1 | 2 | -1, zod.ZodTypeDef, 0 | 1 | 2 | -1>, 0 | 1 | 2 | -1, unknown>;
            }, "strip", zod.ZodTypeAny, {
                layout_mode: 0 | 1 | 2 | -1;
            }, {
                layout_mode?: unknown;
            }>;
        }>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.ACTIVITY_LAYOUT_MODE_UPDATE>;
            data: zod.ZodObject<{
                layout_mode: zod.ZodEffects<zod.ZodType<0 | 1 | 2 | -1, zod.ZodTypeDef, 0 | 1 | 2 | -1>, 0 | 1 | 2 | -1, unknown>;
            }, "strip", zod.ZodTypeAny, {
                layout_mode: 0 | 1 | 2 | -1;
            }, {
                layout_mode?: unknown;
            }>;
        }>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.ACTIVITY_LAYOUT_MODE_UPDATE>;
            data: zod.ZodObject<{
                layout_mode: zod.ZodEffects<zod.ZodType<0 | 1 | 2 | -1, zod.ZodTypeDef, 0 | 1 | 2 | -1>, 0 | 1 | 2 | -1, unknown>;
            }, "strip", zod.ZodTypeAny, {
                layout_mode: 0 | 1 | 2 | -1;
            }, {
                layout_mode?: unknown;
            }>;
        }>, zod.ZodTypeAny, "passthrough">>;
    };
    ORIENTATION_UPDATE: {
        payload: zod.ZodObject<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.ORIENTATION_UPDATE>;
            data: zod.ZodObject<{
                screen_orientation: zod.ZodEffects<zod.ZodType<0 | 1 | -1, zod.ZodTypeDef, 0 | 1 | -1>, 0 | 1 | -1, unknown>;
                /**
                 * @deprecated use screen_orientation instead
                 */
                orientation: zod.ZodNativeEnum<typeof Orientation>;
            }, "strip", zod.ZodTypeAny, {
                screen_orientation: 0 | 1 | -1;
                orientation: Orientation;
            }, {
                orientation: Orientation;
                screen_orientation?: unknown;
            }>;
        }>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.ORIENTATION_UPDATE>;
            data: zod.ZodObject<{
                screen_orientation: zod.ZodEffects<zod.ZodType<0 | 1 | -1, zod.ZodTypeDef, 0 | 1 | -1>, 0 | 1 | -1, unknown>;
                /**
                 * @deprecated use screen_orientation instead
                 */
                orientation: zod.ZodNativeEnum<typeof Orientation>;
            }, "strip", zod.ZodTypeAny, {
                screen_orientation: 0 | 1 | -1;
                orientation: Orientation;
            }, {
                orientation: Orientation;
                screen_orientation?: unknown;
            }>;
        }>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.ORIENTATION_UPDATE>;
            data: zod.ZodObject<{
                screen_orientation: zod.ZodEffects<zod.ZodType<0 | 1 | -1, zod.ZodTypeDef, 0 | 1 | -1>, 0 | 1 | -1, unknown>;
                /**
                 * @deprecated use screen_orientation instead
                 */
                orientation: zod.ZodNativeEnum<typeof Orientation>;
            }, "strip", zod.ZodTypeAny, {
                screen_orientation: 0 | 1 | -1;
                orientation: Orientation;
            }, {
                orientation: Orientation;
                screen_orientation?: unknown;
            }>;
        }>, zod.ZodTypeAny, "passthrough">>;
    };
    CURRENT_USER_UPDATE: {
        payload: zod.ZodObject<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.CURRENT_USER_UPDATE>;
            data: zod.ZodObject<{
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
            }>;
        }>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.CURRENT_USER_UPDATE>;
            data: zod.ZodObject<{
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
            }>;
        }>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.CURRENT_USER_UPDATE>;
            data: zod.ZodObject<{
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
            }>;
        }>, zod.ZodTypeAny, "passthrough">>;
    };
    CURRENT_GUILD_MEMBER_UPDATE: {
        payload: zod.ZodObject<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.CURRENT_GUILD_MEMBER_UPDATE>;
            data: zod.ZodObject<{
                user_id: zod.ZodString;
                nick: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                guild_id: zod.ZodString;
                avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                avatar_decoration_data: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                    asset: zod.ZodString;
                    sku_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                }, "strip", zod.ZodTypeAny, {
                    asset: string;
                    sku_id?: string | null | undefined;
                }, {
                    asset: string;
                    sku_id?: string | null | undefined;
                }>>>;
                color_string: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            }, "strip", zod.ZodTypeAny, {
                user_id: string;
                guild_id: string;
                avatar?: string | null | undefined;
                avatar_decoration_data?: {
                    asset: string;
                    sku_id?: string | null | undefined;
                } | null | undefined;
                nick?: string | null | undefined;
                color_string?: string | null | undefined;
            }, {
                user_id: string;
                guild_id: string;
                avatar?: string | null | undefined;
                avatar_decoration_data?: {
                    asset: string;
                    sku_id?: string | null | undefined;
                } | null | undefined;
                nick?: string | null | undefined;
                color_string?: string | null | undefined;
            }>;
        }>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.CURRENT_GUILD_MEMBER_UPDATE>;
            data: zod.ZodObject<{
                user_id: zod.ZodString;
                nick: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                guild_id: zod.ZodString;
                avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                avatar_decoration_data: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                    asset: zod.ZodString;
                    sku_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                }, "strip", zod.ZodTypeAny, {
                    asset: string;
                    sku_id?: string | null | undefined;
                }, {
                    asset: string;
                    sku_id?: string | null | undefined;
                }>>>;
                color_string: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            }, "strip", zod.ZodTypeAny, {
                user_id: string;
                guild_id: string;
                avatar?: string | null | undefined;
                avatar_decoration_data?: {
                    asset: string;
                    sku_id?: string | null | undefined;
                } | null | undefined;
                nick?: string | null | undefined;
                color_string?: string | null | undefined;
            }, {
                user_id: string;
                guild_id: string;
                avatar?: string | null | undefined;
                avatar_decoration_data?: {
                    asset: string;
                    sku_id?: string | null | undefined;
                } | null | undefined;
                nick?: string | null | undefined;
                color_string?: string | null | undefined;
            }>;
        }>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.CURRENT_GUILD_MEMBER_UPDATE>;
            data: zod.ZodObject<{
                user_id: zod.ZodString;
                nick: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                guild_id: zod.ZodString;
                avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                avatar_decoration_data: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                    asset: zod.ZodString;
                    sku_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                }, "strip", zod.ZodTypeAny, {
                    asset: string;
                    sku_id?: string | null | undefined;
                }, {
                    asset: string;
                    sku_id?: string | null | undefined;
                }>>>;
                color_string: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            }, "strip", zod.ZodTypeAny, {
                user_id: string;
                guild_id: string;
                avatar?: string | null | undefined;
                avatar_decoration_data?: {
                    asset: string;
                    sku_id?: string | null | undefined;
                } | null | undefined;
                nick?: string | null | undefined;
                color_string?: string | null | undefined;
            }, {
                user_id: string;
                guild_id: string;
                avatar?: string | null | undefined;
                avatar_decoration_data?: {
                    asset: string;
                    sku_id?: string | null | undefined;
                } | null | undefined;
                nick?: string | null | undefined;
                color_string?: string | null | undefined;
            }>;
        }>, zod.ZodTypeAny, "passthrough">>;
        subscribeArgs: zod.ZodObject<{
            guild_id: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            guild_id: string;
        }, {
            guild_id: string;
        }>;
    };
    ENTITLEMENT_CREATE: {
        payload: zod.ZodObject<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.ENTITLEMENT_CREATE>;
            data: zod.ZodObject<{
                entitlement: zod.ZodObject<{
                    id: zod.ZodString;
                    sku_id: zod.ZodString;
                    application_id: zod.ZodString;
                    user_id: zod.ZodString;
                    gift_code_flags: zod.ZodNumber;
                    type: zod.ZodEffects<zod.ZodType<1 | 4 | 2 | 3 | 5 | 6 | 7 | -1, zod.ZodTypeDef, 1 | 4 | 2 | 3 | 5 | 6 | 7 | -1>, 1 | 4 | 2 | 3 | 5 | 6 | 7 | -1, unknown>;
                    gifter_user_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    branches: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>>;
                    starts_at: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    ends_at: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    parent_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    consumed: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
                    deleted: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
                    gift_code_batch_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                }, "strip", zod.ZodTypeAny, {
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
                }, {
                    id: string;
                    application_id: string;
                    user_id: string;
                    sku_id: string;
                    gift_code_flags: number;
                    type?: unknown;
                    parent_id?: string | null | undefined;
                    gifter_user_id?: string | null | undefined;
                    branches?: string[] | null | undefined;
                    starts_at?: string | null | undefined;
                    ends_at?: string | null | undefined;
                    consumed?: boolean | null | undefined;
                    deleted?: boolean | null | undefined;
                    gift_code_batch_id?: string | null | undefined;
                }>;
            }, "strip", zod.ZodTypeAny, {
                entitlement: {
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
                };
            }, {
                entitlement: {
                    id: string;
                    application_id: string;
                    user_id: string;
                    sku_id: string;
                    gift_code_flags: number;
                    type?: unknown;
                    parent_id?: string | null | undefined;
                    gifter_user_id?: string | null | undefined;
                    branches?: string[] | null | undefined;
                    starts_at?: string | null | undefined;
                    ends_at?: string | null | undefined;
                    consumed?: boolean | null | undefined;
                    deleted?: boolean | null | undefined;
                    gift_code_batch_id?: string | null | undefined;
                };
            }>;
        }>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.ENTITLEMENT_CREATE>;
            data: zod.ZodObject<{
                entitlement: zod.ZodObject<{
                    id: zod.ZodString;
                    sku_id: zod.ZodString;
                    application_id: zod.ZodString;
                    user_id: zod.ZodString;
                    gift_code_flags: zod.ZodNumber;
                    type: zod.ZodEffects<zod.ZodType<1 | 4 | 2 | 3 | 5 | 6 | 7 | -1, zod.ZodTypeDef, 1 | 4 | 2 | 3 | 5 | 6 | 7 | -1>, 1 | 4 | 2 | 3 | 5 | 6 | 7 | -1, unknown>;
                    gifter_user_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    branches: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>>;
                    starts_at: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    ends_at: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    parent_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    consumed: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
                    deleted: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
                    gift_code_batch_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                }, "strip", zod.ZodTypeAny, {
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
                }, {
                    id: string;
                    application_id: string;
                    user_id: string;
                    sku_id: string;
                    gift_code_flags: number;
                    type?: unknown;
                    parent_id?: string | null | undefined;
                    gifter_user_id?: string | null | undefined;
                    branches?: string[] | null | undefined;
                    starts_at?: string | null | undefined;
                    ends_at?: string | null | undefined;
                    consumed?: boolean | null | undefined;
                    deleted?: boolean | null | undefined;
                    gift_code_batch_id?: string | null | undefined;
                }>;
            }, "strip", zod.ZodTypeAny, {
                entitlement: {
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
                };
            }, {
                entitlement: {
                    id: string;
                    application_id: string;
                    user_id: string;
                    sku_id: string;
                    gift_code_flags: number;
                    type?: unknown;
                    parent_id?: string | null | undefined;
                    gifter_user_id?: string | null | undefined;
                    branches?: string[] | null | undefined;
                    starts_at?: string | null | undefined;
                    ends_at?: string | null | undefined;
                    consumed?: boolean | null | undefined;
                    deleted?: boolean | null | undefined;
                    gift_code_batch_id?: string | null | undefined;
                };
            }>;
        }>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.ENTITLEMENT_CREATE>;
            data: zod.ZodObject<{
                entitlement: zod.ZodObject<{
                    id: zod.ZodString;
                    sku_id: zod.ZodString;
                    application_id: zod.ZodString;
                    user_id: zod.ZodString;
                    gift_code_flags: zod.ZodNumber;
                    type: zod.ZodEffects<zod.ZodType<1 | 4 | 2 | 3 | 5 | 6 | 7 | -1, zod.ZodTypeDef, 1 | 4 | 2 | 3 | 5 | 6 | 7 | -1>, 1 | 4 | 2 | 3 | 5 | 6 | 7 | -1, unknown>;
                    gifter_user_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    branches: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>>;
                    starts_at: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    ends_at: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    parent_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    consumed: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
                    deleted: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
                    gift_code_batch_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                }, "strip", zod.ZodTypeAny, {
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
                }, {
                    id: string;
                    application_id: string;
                    user_id: string;
                    sku_id: string;
                    gift_code_flags: number;
                    type?: unknown;
                    parent_id?: string | null | undefined;
                    gifter_user_id?: string | null | undefined;
                    branches?: string[] | null | undefined;
                    starts_at?: string | null | undefined;
                    ends_at?: string | null | undefined;
                    consumed?: boolean | null | undefined;
                    deleted?: boolean | null | undefined;
                    gift_code_batch_id?: string | null | undefined;
                }>;
            }, "strip", zod.ZodTypeAny, {
                entitlement: {
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
                };
            }, {
                entitlement: {
                    id: string;
                    application_id: string;
                    user_id: string;
                    sku_id: string;
                    gift_code_flags: number;
                    type?: unknown;
                    parent_id?: string | null | undefined;
                    gifter_user_id?: string | null | undefined;
                    branches?: string[] | null | undefined;
                    starts_at?: string | null | undefined;
                    ends_at?: string | null | undefined;
                    consumed?: boolean | null | undefined;
                    deleted?: boolean | null | undefined;
                    gift_code_batch_id?: string | null | undefined;
                };
            }>;
        }>, zod.ZodTypeAny, "passthrough">>;
    };
    THERMAL_STATE_UPDATE: {
        payload: zod.ZodObject<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.THERMAL_STATE_UPDATE>;
            data: zod.ZodObject<{
                thermal_state: zod.ZodEffects<zod.ZodType<0 | 1 | 2 | 3 | -1, zod.ZodTypeDef, 0 | 1 | 2 | 3 | -1>, 0 | 1 | 2 | 3 | -1, unknown>;
            }, "strip", zod.ZodTypeAny, {
                thermal_state: 0 | 1 | 2 | 3 | -1;
            }, {
                thermal_state?: unknown;
            }>;
        }>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.THERMAL_STATE_UPDATE>;
            data: zod.ZodObject<{
                thermal_state: zod.ZodEffects<zod.ZodType<0 | 1 | 2 | 3 | -1, zod.ZodTypeDef, 0 | 1 | 2 | 3 | -1>, 0 | 1 | 2 | 3 | -1, unknown>;
            }, "strip", zod.ZodTypeAny, {
                thermal_state: 0 | 1 | 2 | 3 | -1;
            }, {
                thermal_state?: unknown;
            }>;
        }>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.THERMAL_STATE_UPDATE>;
            data: zod.ZodObject<{
                thermal_state: zod.ZodEffects<zod.ZodType<0 | 1 | 2 | 3 | -1, zod.ZodTypeDef, 0 | 1 | 2 | 3 | -1>, 0 | 1 | 2 | 3 | -1, unknown>;
            }, "strip", zod.ZodTypeAny, {
                thermal_state: 0 | 1 | 2 | 3 | -1;
            }, {
                thermal_state?: unknown;
            }>;
        }>, zod.ZodTypeAny, "passthrough">>;
    };
    ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE: {
        payload: zod.ZodObject<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE>;
            data: zod.ZodObject<{
                participants: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    username: zod.ZodString;
                    global_name: zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNull]>>;
                    discriminator: zod.ZodString;
                    avatar: zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNull]>>;
                    flags: zod.ZodNumber;
                    bot: zod.ZodBoolean;
                    avatar_decoration_data: zod.ZodOptional<zod.ZodUnion<[zod.ZodObject<{
                        asset: zod.ZodString;
                        skuId: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        asset: string;
                        skuId?: string | undefined;
                        expiresAt?: number | undefined;
                    }, {
                        asset: string;
                        skuId?: string | undefined;
                        expiresAt?: number | undefined;
                    }>, zod.ZodNull]>>;
                    premium_type: zod.ZodOptional<zod.ZodUnion<[zod.ZodNumber, zod.ZodNull]>>;
                    nickname: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE>;
            data: zod.ZodObject<{
                participants: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    username: zod.ZodString;
                    global_name: zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNull]>>;
                    discriminator: zod.ZodString;
                    avatar: zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNull]>>;
                    flags: zod.ZodNumber;
                    bot: zod.ZodBoolean;
                    avatar_decoration_data: zod.ZodOptional<zod.ZodUnion<[zod.ZodObject<{
                        asset: zod.ZodString;
                        skuId: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        asset: string;
                        skuId?: string | undefined;
                        expiresAt?: number | undefined;
                    }, {
                        asset: string;
                        skuId?: string | undefined;
                        expiresAt?: number | undefined;
                    }>, zod.ZodNull]>>;
                    premium_type: zod.ZodOptional<zod.ZodUnion<[zod.ZodNumber, zod.ZodNull]>>;
                    nickname: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE>;
            data: zod.ZodObject<{
                participants: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    username: zod.ZodString;
                    global_name: zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNull]>>;
                    discriminator: zod.ZodString;
                    avatar: zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNull]>>;
                    flags: zod.ZodNumber;
                    bot: zod.ZodBoolean;
                    avatar_decoration_data: zod.ZodOptional<zod.ZodUnion<[zod.ZodObject<{
                        asset: zod.ZodString;
                        skuId: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        asset: string;
                        skuId?: string | undefined;
                        expiresAt?: number | undefined;
                    }, {
                        asset: string;
                        skuId?: string | undefined;
                        expiresAt?: number | undefined;
                    }>, zod.ZodNull]>>;
                    premium_type: zod.ZodOptional<zod.ZodUnion<[zod.ZodNumber, zod.ZodNull]>>;
                    nickname: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodTypeAny, "passthrough">>;
    };
    RELATIONSHIP_UPDATE: {
        payload: zod.ZodObject<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.RELATIONSHIP_UPDATE>;
            data: zod.ZodObject<{
                type: zod.ZodNumber;
                user: zod.ZodObject<{
                    id: zod.ZodString;
                    username: zod.ZodString;
                    global_name: zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNull]>>;
                    discriminator: zod.ZodString;
                    avatar: zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNull]>>;
                    flags: zod.ZodNumber;
                    bot: zod.ZodBoolean;
                    avatar_decoration_data: zod.ZodOptional<zod.ZodUnion<[zod.ZodObject<{
                        asset: zod.ZodString;
                        skuId: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        asset: string;
                        skuId?: string | undefined;
                        expiresAt?: number | undefined;
                    }, {
                        asset: string;
                        skuId?: string | undefined;
                        expiresAt?: number | undefined;
                    }>, zod.ZodNull]>>;
                    premium_type: zod.ZodOptional<zod.ZodUnion<[zod.ZodNumber, zod.ZodNull]>>;
                }, "strip", zod.ZodTypeAny, {
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
                presence: zod.ZodOptional<zod.ZodObject<{
                    status: zod.ZodString;
                    activity: zod.ZodOptional<zod.ZodUnion<[zod.ZodObject<{
                        session_id: zod.ZodOptional<zod.ZodString>;
                        type: zod.ZodOptional<zod.ZodNumber>;
                        name: zod.ZodString;
                        url: zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNull]>>;
                        application_id: zod.ZodOptional<zod.ZodString>;
                        status_display_type: zod.ZodOptional<zod.ZodNumber>;
                        state: zod.ZodOptional<zod.ZodString>;
                        state_url: zod.ZodOptional<zod.ZodString>;
                        details: zod.ZodOptional<zod.ZodString>;
                        details_url: zod.ZodOptional<zod.ZodString>;
                        emoji: zod.ZodOptional<zod.ZodUnion<[zod.ZodObject<{
                            name: zod.ZodString;
                            id: zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNull]>>;
                            animated: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodNull]>>;
                        }, "strip", zod.ZodTypeAny, {
                            name: string;
                            id?: string | null | undefined;
                            animated?: boolean | null | undefined;
                        }, {
                            name: string;
                            id?: string | null | undefined;
                            animated?: boolean | null | undefined;
                        }>, zod.ZodNull]>>;
                        assets: zod.ZodOptional<zod.ZodObject<{
                            large_image: zod.ZodOptional<zod.ZodString>;
                            large_text: zod.ZodOptional<zod.ZodString>;
                            large_url: zod.ZodOptional<zod.ZodString>;
                            small_image: zod.ZodOptional<zod.ZodString>;
                            small_text: zod.ZodOptional<zod.ZodString>;
                            small_url: zod.ZodOptional<zod.ZodString>;
                        }, "strip", zod.ZodTypeAny, {
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
                        timestamps: zod.ZodOptional<zod.ZodObject<{
                            start: zod.ZodOptional<zod.ZodNumber>;
                            end: zod.ZodOptional<zod.ZodNumber>;
                        }, "strip", zod.ZodTypeAny, {
                            start?: number | undefined;
                            end?: number | undefined;
                        }, {
                            start?: number | undefined;
                            end?: number | undefined;
                        }>>;
                        party: zod.ZodOptional<zod.ZodObject<{
                            id: zod.ZodOptional<zod.ZodString>;
                            size: zod.ZodOptional<zod.ZodArray<zod.ZodNumber, "many">>;
                            privacy: zod.ZodOptional<zod.ZodNumber>;
                        }, "strip", zod.ZodTypeAny, {
                            id?: string | undefined;
                            size?: number[] | undefined;
                            privacy?: number | undefined;
                        }, {
                            id?: string | undefined;
                            size?: number[] | undefined;
                            privacy?: number | undefined;
                        }>>;
                        secrets: zod.ZodOptional<zod.ZodObject<{
                            match: zod.ZodOptional<zod.ZodString>;
                            join: zod.ZodOptional<zod.ZodString>;
                        }, "strip", zod.ZodTypeAny, {
                            join?: string | undefined;
                            match?: string | undefined;
                        }, {
                            join?: string | undefined;
                            match?: string | undefined;
                        }>>;
                        sync_id: zod.ZodOptional<zod.ZodString>;
                        created_at: zod.ZodOptional<zod.ZodNumber>;
                        instance: zod.ZodOptional<zod.ZodBoolean>;
                        flags: zod.ZodOptional<zod.ZodNumber>;
                        metadata: zod.ZodOptional<zod.ZodObject<{}, "strip", zod.ZodTypeAny, {}, {}>>;
                        platform: zod.ZodOptional<zod.ZodString>;
                        supported_platforms: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                        buttons: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                        hangStatus: zod.ZodOptional<zod.ZodString>;
                    }, "strip", zod.ZodTypeAny, {
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
                    }>, zod.ZodNull]>>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            }>;
        }>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.RELATIONSHIP_UPDATE>;
            data: zod.ZodObject<{
                type: zod.ZodNumber;
                user: zod.ZodObject<{
                    id: zod.ZodString;
                    username: zod.ZodString;
                    global_name: zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNull]>>;
                    discriminator: zod.ZodString;
                    avatar: zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNull]>>;
                    flags: zod.ZodNumber;
                    bot: zod.ZodBoolean;
                    avatar_decoration_data: zod.ZodOptional<zod.ZodUnion<[zod.ZodObject<{
                        asset: zod.ZodString;
                        skuId: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        asset: string;
                        skuId?: string | undefined;
                        expiresAt?: number | undefined;
                    }, {
                        asset: string;
                        skuId?: string | undefined;
                        expiresAt?: number | undefined;
                    }>, zod.ZodNull]>>;
                    premium_type: zod.ZodOptional<zod.ZodUnion<[zod.ZodNumber, zod.ZodNull]>>;
                }, "strip", zod.ZodTypeAny, {
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
                presence: zod.ZodOptional<zod.ZodObject<{
                    status: zod.ZodString;
                    activity: zod.ZodOptional<zod.ZodUnion<[zod.ZodObject<{
                        session_id: zod.ZodOptional<zod.ZodString>;
                        type: zod.ZodOptional<zod.ZodNumber>;
                        name: zod.ZodString;
                        url: zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNull]>>;
                        application_id: zod.ZodOptional<zod.ZodString>;
                        status_display_type: zod.ZodOptional<zod.ZodNumber>;
                        state: zod.ZodOptional<zod.ZodString>;
                        state_url: zod.ZodOptional<zod.ZodString>;
                        details: zod.ZodOptional<zod.ZodString>;
                        details_url: zod.ZodOptional<zod.ZodString>;
                        emoji: zod.ZodOptional<zod.ZodUnion<[zod.ZodObject<{
                            name: zod.ZodString;
                            id: zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNull]>>;
                            animated: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodNull]>>;
                        }, "strip", zod.ZodTypeAny, {
                            name: string;
                            id?: string | null | undefined;
                            animated?: boolean | null | undefined;
                        }, {
                            name: string;
                            id?: string | null | undefined;
                            animated?: boolean | null | undefined;
                        }>, zod.ZodNull]>>;
                        assets: zod.ZodOptional<zod.ZodObject<{
                            large_image: zod.ZodOptional<zod.ZodString>;
                            large_text: zod.ZodOptional<zod.ZodString>;
                            large_url: zod.ZodOptional<zod.ZodString>;
                            small_image: zod.ZodOptional<zod.ZodString>;
                            small_text: zod.ZodOptional<zod.ZodString>;
                            small_url: zod.ZodOptional<zod.ZodString>;
                        }, "strip", zod.ZodTypeAny, {
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
                        timestamps: zod.ZodOptional<zod.ZodObject<{
                            start: zod.ZodOptional<zod.ZodNumber>;
                            end: zod.ZodOptional<zod.ZodNumber>;
                        }, "strip", zod.ZodTypeAny, {
                            start?: number | undefined;
                            end?: number | undefined;
                        }, {
                            start?: number | undefined;
                            end?: number | undefined;
                        }>>;
                        party: zod.ZodOptional<zod.ZodObject<{
                            id: zod.ZodOptional<zod.ZodString>;
                            size: zod.ZodOptional<zod.ZodArray<zod.ZodNumber, "many">>;
                            privacy: zod.ZodOptional<zod.ZodNumber>;
                        }, "strip", zod.ZodTypeAny, {
                            id?: string | undefined;
                            size?: number[] | undefined;
                            privacy?: number | undefined;
                        }, {
                            id?: string | undefined;
                            size?: number[] | undefined;
                            privacy?: number | undefined;
                        }>>;
                        secrets: zod.ZodOptional<zod.ZodObject<{
                            match: zod.ZodOptional<zod.ZodString>;
                            join: zod.ZodOptional<zod.ZodString>;
                        }, "strip", zod.ZodTypeAny, {
                            join?: string | undefined;
                            match?: string | undefined;
                        }, {
                            join?: string | undefined;
                            match?: string | undefined;
                        }>>;
                        sync_id: zod.ZodOptional<zod.ZodString>;
                        created_at: zod.ZodOptional<zod.ZodNumber>;
                        instance: zod.ZodOptional<zod.ZodBoolean>;
                        flags: zod.ZodOptional<zod.ZodNumber>;
                        metadata: zod.ZodOptional<zod.ZodObject<{}, "strip", zod.ZodTypeAny, {}, {}>>;
                        platform: zod.ZodOptional<zod.ZodString>;
                        supported_platforms: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                        buttons: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                        hangStatus: zod.ZodOptional<zod.ZodString>;
                    }, "strip", zod.ZodTypeAny, {
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
                    }>, zod.ZodNull]>>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            }>;
        }>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.RELATIONSHIP_UPDATE>;
            data: zod.ZodObject<{
                type: zod.ZodNumber;
                user: zod.ZodObject<{
                    id: zod.ZodString;
                    username: zod.ZodString;
                    global_name: zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNull]>>;
                    discriminator: zod.ZodString;
                    avatar: zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNull]>>;
                    flags: zod.ZodNumber;
                    bot: zod.ZodBoolean;
                    avatar_decoration_data: zod.ZodOptional<zod.ZodUnion<[zod.ZodObject<{
                        asset: zod.ZodString;
                        skuId: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        asset: string;
                        skuId?: string | undefined;
                        expiresAt?: number | undefined;
                    }, {
                        asset: string;
                        skuId?: string | undefined;
                        expiresAt?: number | undefined;
                    }>, zod.ZodNull]>>;
                    premium_type: zod.ZodOptional<zod.ZodUnion<[zod.ZodNumber, zod.ZodNull]>>;
                }, "strip", zod.ZodTypeAny, {
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
                presence: zod.ZodOptional<zod.ZodObject<{
                    status: zod.ZodString;
                    activity: zod.ZodOptional<zod.ZodUnion<[zod.ZodObject<{
                        session_id: zod.ZodOptional<zod.ZodString>;
                        type: zod.ZodOptional<zod.ZodNumber>;
                        name: zod.ZodString;
                        url: zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNull]>>;
                        application_id: zod.ZodOptional<zod.ZodString>;
                        status_display_type: zod.ZodOptional<zod.ZodNumber>;
                        state: zod.ZodOptional<zod.ZodString>;
                        state_url: zod.ZodOptional<zod.ZodString>;
                        details: zod.ZodOptional<zod.ZodString>;
                        details_url: zod.ZodOptional<zod.ZodString>;
                        emoji: zod.ZodOptional<zod.ZodUnion<[zod.ZodObject<{
                            name: zod.ZodString;
                            id: zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNull]>>;
                            animated: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodNull]>>;
                        }, "strip", zod.ZodTypeAny, {
                            name: string;
                            id?: string | null | undefined;
                            animated?: boolean | null | undefined;
                        }, {
                            name: string;
                            id?: string | null | undefined;
                            animated?: boolean | null | undefined;
                        }>, zod.ZodNull]>>;
                        assets: zod.ZodOptional<zod.ZodObject<{
                            large_image: zod.ZodOptional<zod.ZodString>;
                            large_text: zod.ZodOptional<zod.ZodString>;
                            large_url: zod.ZodOptional<zod.ZodString>;
                            small_image: zod.ZodOptional<zod.ZodString>;
                            small_text: zod.ZodOptional<zod.ZodString>;
                            small_url: zod.ZodOptional<zod.ZodString>;
                        }, "strip", zod.ZodTypeAny, {
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
                        timestamps: zod.ZodOptional<zod.ZodObject<{
                            start: zod.ZodOptional<zod.ZodNumber>;
                            end: zod.ZodOptional<zod.ZodNumber>;
                        }, "strip", zod.ZodTypeAny, {
                            start?: number | undefined;
                            end?: number | undefined;
                        }, {
                            start?: number | undefined;
                            end?: number | undefined;
                        }>>;
                        party: zod.ZodOptional<zod.ZodObject<{
                            id: zod.ZodOptional<zod.ZodString>;
                            size: zod.ZodOptional<zod.ZodArray<zod.ZodNumber, "many">>;
                            privacy: zod.ZodOptional<zod.ZodNumber>;
                        }, "strip", zod.ZodTypeAny, {
                            id?: string | undefined;
                            size?: number[] | undefined;
                            privacy?: number | undefined;
                        }, {
                            id?: string | undefined;
                            size?: number[] | undefined;
                            privacy?: number | undefined;
                        }>>;
                        secrets: zod.ZodOptional<zod.ZodObject<{
                            match: zod.ZodOptional<zod.ZodString>;
                            join: zod.ZodOptional<zod.ZodString>;
                        }, "strip", zod.ZodTypeAny, {
                            join?: string | undefined;
                            match?: string | undefined;
                        }, {
                            join?: string | undefined;
                            match?: string | undefined;
                        }>>;
                        sync_id: zod.ZodOptional<zod.ZodString>;
                        created_at: zod.ZodOptional<zod.ZodNumber>;
                        instance: zod.ZodOptional<zod.ZodBoolean>;
                        flags: zod.ZodOptional<zod.ZodNumber>;
                        metadata: zod.ZodOptional<zod.ZodObject<{}, "strip", zod.ZodTypeAny, {}, {}>>;
                        platform: zod.ZodOptional<zod.ZodString>;
                        supported_platforms: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                        buttons: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                        hangStatus: zod.ZodOptional<zod.ZodString>;
                    }, "strip", zod.ZodTypeAny, {
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
                    }>, zod.ZodNull]>>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            }>;
        }>, zod.ZodTypeAny, "passthrough">>;
    };
    ACTIVITY_JOIN: {
        payload: zod.ZodObject<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.ACTIVITY_JOIN>;
            data: zod.ZodObject<{
                applicationId: zod.ZodString;
                secret: zod.ZodString;
            }, "strip", zod.ZodTypeAny, {
                applicationId: string;
                secret: string;
            }, {
                applicationId: string;
                secret: string;
            }>;
        }>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.ACTIVITY_JOIN>;
            data: zod.ZodObject<{
                applicationId: zod.ZodString;
                secret: zod.ZodString;
            }, "strip", zod.ZodTypeAny, {
                applicationId: string;
                secret: string;
            }, {
                applicationId: string;
                secret: string;
            }>;
        }>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.ACTIVITY_JOIN>;
            data: zod.ZodObject<{
                applicationId: zod.ZodString;
                secret: zod.ZodString;
            }, "strip", zod.ZodTypeAny, {
                applicationId: string;
                secret: string;
            }, {
                applicationId: string;
                secret: string;
            }>;
        }>, zod.ZodTypeAny, "passthrough">>;
    };
    QUEST_ENROLLMENT_STATUS_UPDATE: {
        payload: zod.ZodObject<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.QUEST_ENROLLMENT_STATUS_UPDATE>;
            data: zod.ZodObject<{
                quest_id: zod.ZodString;
                is_enrolled: zod.ZodBoolean;
                enrolled_at: zod.ZodString;
            }, "strip", zod.ZodTypeAny, {
                quest_id: string;
                is_enrolled: boolean;
                enrolled_at: string;
            }, {
                quest_id: string;
                is_enrolled: boolean;
                enrolled_at: string;
            }>;
        }>, "passthrough", zod.ZodTypeAny, zod.objectOutputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.QUEST_ENROLLMENT_STATUS_UPDATE>;
            data: zod.ZodObject<{
                quest_id: zod.ZodString;
                is_enrolled: zod.ZodBoolean;
                enrolled_at: zod.ZodString;
            }, "strip", zod.ZodTypeAny, {
                quest_id: string;
                is_enrolled: boolean;
                enrolled_at: string;
            }, {
                quest_id: string;
                is_enrolled: boolean;
                enrolled_at: string;
            }>;
        }>, zod.ZodTypeAny, "passthrough">, zod.objectInputType<zod.objectUtil.extendShape<zod.objectUtil.extendShape<{
            cmd: zod.ZodString;
            data: zod.ZodUnknown;
            evt: zod.ZodNull;
            nonce: zod.ZodString;
        }, {
            evt: zod.ZodNativeEnum<typeof Events>;
            nonce: zod.ZodNullable<zod.ZodString>;
            cmd: zod.ZodLiteral<"DISPATCH">;
            data: zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>;
        }>, {
            evt: zod.ZodLiteral<Events.QUEST_ENROLLMENT_STATUS_UPDATE>;
            data: zod.ZodObject<{
                quest_id: zod.ZodString;
                is_enrolled: zod.ZodBoolean;
                enrolled_at: zod.ZodString;
            }, "strip", zod.ZodTypeAny, {
                quest_id: string;
                is_enrolled: boolean;
                enrolled_at: string;
            }, {
                quest_id: string;
                is_enrolled: boolean;
                enrolled_at: string;
            }>;
        }>, zod.ZodTypeAny, "passthrough">>;
    };
};
