export declare enum RPCCloseCodes {
    CLOSE_NORMAL = 1000,
    CLOSE_UNSUPPORTED = 1003,
    CLOSE_ABNORMAL = 1006,
    INVALID_CLIENTID = 4000,
    INVALID_ORIGIN = 4001,
    RATELIMITED = 4002,
    TOKEN_REVOKED = 4003,
    INVALID_VERSION = 4004,
    INVALID_ENCODING = 4005
}
export declare enum RPCErrorCodes {
    INVALID_PAYLOAD = 4000,
    INVALID_COMMAND = 4002,
    INVALID_GUILD = 4003,
    INVALID_EVENT = 4004,
    INVALID_CHANNEL = 4005,
    INVALID_PERMISSIONS = 4006,
    INVALID_CLIENTID = 4007,
    INVALID_ORIGIN = 4008,
    INVALID_TOKEN = 4009,
    INVALID_USER = 4010
}
/**
 * @deprecated use OrientationTypeObject instead
 */
export declare enum Orientation {
    LANDSCAPE = "landscape",
    PORTRAIT = "portrait"
}
export declare enum Platform {
    MOBILE = "mobile",
    DESKTOP = "desktop"
}
/** See https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags for more Permissions details */
export declare const Permissions: Readonly<{
    CREATE_INSTANT_INVITE: import("./utils/BigFlagUtils").BigFlag;
    KICK_MEMBERS: import("./utils/BigFlagUtils").BigFlag;
    BAN_MEMBERS: import("./utils/BigFlagUtils").BigFlag;
    ADMINISTRATOR: import("./utils/BigFlagUtils").BigFlag;
    MANAGE_CHANNELS: import("./utils/BigFlagUtils").BigFlag;
    MANAGE_GUILD: import("./utils/BigFlagUtils").BigFlag;
    ADD_REACTIONS: import("./utils/BigFlagUtils").BigFlag;
    VIEW_AUDIT_LOG: import("./utils/BigFlagUtils").BigFlag;
    PRIORITY_SPEAKER: import("./utils/BigFlagUtils").BigFlag;
    STREAM: import("./utils/BigFlagUtils").BigFlag;
    VIEW_CHANNEL: import("./utils/BigFlagUtils").BigFlag;
    SEND_MESSAGES: import("./utils/BigFlagUtils").BigFlag;
    SEND_TTS_MESSAGES: import("./utils/BigFlagUtils").BigFlag;
    MANAGE_MESSAGES: import("./utils/BigFlagUtils").BigFlag;
    EMBED_LINKS: import("./utils/BigFlagUtils").BigFlag;
    ATTACH_FILES: import("./utils/BigFlagUtils").BigFlag;
    READ_MESSAGE_HISTORY: import("./utils/BigFlagUtils").BigFlag;
    MENTION_EVERYONE: import("./utils/BigFlagUtils").BigFlag;
    USE_EXTERNAL_EMOJIS: import("./utils/BigFlagUtils").BigFlag;
    VIEW_GUILD_INSIGHTS: import("./utils/BigFlagUtils").BigFlag;
    CONNECT: import("./utils/BigFlagUtils").BigFlag;
    SPEAK: import("./utils/BigFlagUtils").BigFlag;
    MUTE_MEMBERS: import("./utils/BigFlagUtils").BigFlag;
    DEAFEN_MEMBERS: import("./utils/BigFlagUtils").BigFlag;
    MOVE_MEMBERS: import("./utils/BigFlagUtils").BigFlag;
    USE_VAD: import("./utils/BigFlagUtils").BigFlag;
    CHANGE_NICKNAME: import("./utils/BigFlagUtils").BigFlag;
    MANAGE_NICKNAMES: import("./utils/BigFlagUtils").BigFlag;
    MANAGE_ROLES: import("./utils/BigFlagUtils").BigFlag;
    MANAGE_WEBHOOKS: import("./utils/BigFlagUtils").BigFlag;
    MANAGE_GUILD_EXPRESSIONS: import("./utils/BigFlagUtils").BigFlag;
    USE_APPLICATION_COMMANDS: import("./utils/BigFlagUtils").BigFlag;
    REQUEST_TO_SPEAK: import("./utils/BigFlagUtils").BigFlag;
    MANAGE_EVENTS: import("./utils/BigFlagUtils").BigFlag;
    MANAGE_THREADS: import("./utils/BigFlagUtils").BigFlag;
    CREATE_PUBLIC_THREADS: import("./utils/BigFlagUtils").BigFlag;
    CREATE_PRIVATE_THREADS: import("./utils/BigFlagUtils").BigFlag;
    USE_EXTERNAL_STICKERS: import("./utils/BigFlagUtils").BigFlag;
    SEND_MESSAGES_IN_THREADS: import("./utils/BigFlagUtils").BigFlag;
    USE_EMBEDDED_ACTIVITIES: import("./utils/BigFlagUtils").BigFlag;
    MODERATE_MEMBERS: import("./utils/BigFlagUtils").BigFlag;
    VIEW_CREATOR_MONETIZATION_ANALYTICS: import("./utils/BigFlagUtils").BigFlag;
    USE_SOUNDBOARD: import("./utils/BigFlagUtils").BigFlag;
    CREATE_GUILD_EXPRESSIONS: import("./utils/BigFlagUtils").BigFlag;
    CREATE_EVENTS: import("./utils/BigFlagUtils").BigFlag;
    USE_EXTERNAL_SOUNDS: import("./utils/BigFlagUtils").BigFlag;
    SEND_VOICE_MESSAGES: import("./utils/BigFlagUtils").BigFlag;
    SEND_POLLS: import("./utils/BigFlagUtils").BigFlag;
    USE_EXTERNAL_APPS: import("./utils/BigFlagUtils").BigFlag;
}>;
export declare const UNKNOWN_VERSION_NUMBER = -1;
export declare const HANDSHAKE_SDK_VERSION_MINIMUM_MOBILE_VERSION = 250;
