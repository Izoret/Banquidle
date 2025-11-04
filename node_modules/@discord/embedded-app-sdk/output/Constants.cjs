'use strict';

var BigFlagUtils = require('./utils/BigFlagUtils.cjs');

exports.RPCCloseCodes = void 0;
(function (RPCCloseCodes) {
    RPCCloseCodes[RPCCloseCodes["CLOSE_NORMAL"] = 1000] = "CLOSE_NORMAL";
    RPCCloseCodes[RPCCloseCodes["CLOSE_UNSUPPORTED"] = 1003] = "CLOSE_UNSUPPORTED";
    RPCCloseCodes[RPCCloseCodes["CLOSE_ABNORMAL"] = 1006] = "CLOSE_ABNORMAL";
    RPCCloseCodes[RPCCloseCodes["INVALID_CLIENTID"] = 4000] = "INVALID_CLIENTID";
    RPCCloseCodes[RPCCloseCodes["INVALID_ORIGIN"] = 4001] = "INVALID_ORIGIN";
    RPCCloseCodes[RPCCloseCodes["RATELIMITED"] = 4002] = "RATELIMITED";
    RPCCloseCodes[RPCCloseCodes["TOKEN_REVOKED"] = 4003] = "TOKEN_REVOKED";
    RPCCloseCodes[RPCCloseCodes["INVALID_VERSION"] = 4004] = "INVALID_VERSION";
    RPCCloseCodes[RPCCloseCodes["INVALID_ENCODING"] = 4005] = "INVALID_ENCODING";
})(exports.RPCCloseCodes || (exports.RPCCloseCodes = {}));
exports.RPCErrorCodes = void 0;
(function (RPCErrorCodes) {
    RPCErrorCodes[RPCErrorCodes["INVALID_PAYLOAD"] = 4000] = "INVALID_PAYLOAD";
    RPCErrorCodes[RPCErrorCodes["INVALID_COMMAND"] = 4002] = "INVALID_COMMAND";
    RPCErrorCodes[RPCErrorCodes["INVALID_GUILD"] = 4003] = "INVALID_GUILD";
    RPCErrorCodes[RPCErrorCodes["INVALID_EVENT"] = 4004] = "INVALID_EVENT";
    RPCErrorCodes[RPCErrorCodes["INVALID_CHANNEL"] = 4005] = "INVALID_CHANNEL";
    RPCErrorCodes[RPCErrorCodes["INVALID_PERMISSIONS"] = 4006] = "INVALID_PERMISSIONS";
    RPCErrorCodes[RPCErrorCodes["INVALID_CLIENTID"] = 4007] = "INVALID_CLIENTID";
    RPCErrorCodes[RPCErrorCodes["INVALID_ORIGIN"] = 4008] = "INVALID_ORIGIN";
    RPCErrorCodes[RPCErrorCodes["INVALID_TOKEN"] = 4009] = "INVALID_TOKEN";
    RPCErrorCodes[RPCErrorCodes["INVALID_USER"] = 4010] = "INVALID_USER";
})(exports.RPCErrorCodes || (exports.RPCErrorCodes = {}));
/**
 * @deprecated use OrientationTypeObject instead
 */
exports.Orientation = void 0;
(function (Orientation) {
    Orientation["LANDSCAPE"] = "landscape";
    Orientation["PORTRAIT"] = "portrait";
})(exports.Orientation || (exports.Orientation = {}));
exports.Platform = void 0;
(function (Platform) {
    Platform["MOBILE"] = "mobile";
    Platform["DESKTOP"] = "desktop";
})(exports.Platform || (exports.Platform = {}));
/** See https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags for more Permissions details */
const Permissions = Object.freeze({
    CREATE_INSTANT_INVITE: BigFlagUtils.default.getFlag(0),
    KICK_MEMBERS: BigFlagUtils.default.getFlag(1),
    BAN_MEMBERS: BigFlagUtils.default.getFlag(2),
    ADMINISTRATOR: BigFlagUtils.default.getFlag(3),
    MANAGE_CHANNELS: BigFlagUtils.default.getFlag(4),
    MANAGE_GUILD: BigFlagUtils.default.getFlag(5),
    ADD_REACTIONS: BigFlagUtils.default.getFlag(6),
    VIEW_AUDIT_LOG: BigFlagUtils.default.getFlag(7),
    PRIORITY_SPEAKER: BigFlagUtils.default.getFlag(8),
    STREAM: BigFlagUtils.default.getFlag(9),
    VIEW_CHANNEL: BigFlagUtils.default.getFlag(10),
    SEND_MESSAGES: BigFlagUtils.default.getFlag(11),
    SEND_TTS_MESSAGES: BigFlagUtils.default.getFlag(12),
    MANAGE_MESSAGES: BigFlagUtils.default.getFlag(13),
    EMBED_LINKS: BigFlagUtils.default.getFlag(14),
    ATTACH_FILES: BigFlagUtils.default.getFlag(15),
    READ_MESSAGE_HISTORY: BigFlagUtils.default.getFlag(16),
    MENTION_EVERYONE: BigFlagUtils.default.getFlag(17),
    USE_EXTERNAL_EMOJIS: BigFlagUtils.default.getFlag(18),
    VIEW_GUILD_INSIGHTS: BigFlagUtils.default.getFlag(19),
    CONNECT: BigFlagUtils.default.getFlag(20),
    SPEAK: BigFlagUtils.default.getFlag(21),
    MUTE_MEMBERS: BigFlagUtils.default.getFlag(22),
    DEAFEN_MEMBERS: BigFlagUtils.default.getFlag(23),
    MOVE_MEMBERS: BigFlagUtils.default.getFlag(24),
    USE_VAD: BigFlagUtils.default.getFlag(25),
    CHANGE_NICKNAME: BigFlagUtils.default.getFlag(26),
    MANAGE_NICKNAMES: BigFlagUtils.default.getFlag(27),
    MANAGE_ROLES: BigFlagUtils.default.getFlag(28),
    MANAGE_WEBHOOKS: BigFlagUtils.default.getFlag(29),
    MANAGE_GUILD_EXPRESSIONS: BigFlagUtils.default.getFlag(30),
    USE_APPLICATION_COMMANDS: BigFlagUtils.default.getFlag(31),
    REQUEST_TO_SPEAK: BigFlagUtils.default.getFlag(32),
    MANAGE_EVENTS: BigFlagUtils.default.getFlag(33),
    MANAGE_THREADS: BigFlagUtils.default.getFlag(34),
    CREATE_PUBLIC_THREADS: BigFlagUtils.default.getFlag(35),
    CREATE_PRIVATE_THREADS: BigFlagUtils.default.getFlag(36),
    USE_EXTERNAL_STICKERS: BigFlagUtils.default.getFlag(37),
    SEND_MESSAGES_IN_THREADS: BigFlagUtils.default.getFlag(38),
    USE_EMBEDDED_ACTIVITIES: BigFlagUtils.default.getFlag(39),
    MODERATE_MEMBERS: BigFlagUtils.default.getFlag(40),
    VIEW_CREATOR_MONETIZATION_ANALYTICS: BigFlagUtils.default.getFlag(41),
    USE_SOUNDBOARD: BigFlagUtils.default.getFlag(42),
    CREATE_GUILD_EXPRESSIONS: BigFlagUtils.default.getFlag(43),
    CREATE_EVENTS: BigFlagUtils.default.getFlag(44),
    USE_EXTERNAL_SOUNDS: BigFlagUtils.default.getFlag(45),
    SEND_VOICE_MESSAGES: BigFlagUtils.default.getFlag(46),
    SEND_POLLS: BigFlagUtils.default.getFlag(49),
    USE_EXTERNAL_APPS: BigFlagUtils.default.getFlag(50),
});
const UNKNOWN_VERSION_NUMBER = -1;
const HANDSHAKE_SDK_VERSION_MINIMUM_MOBILE_VERSION = 250;

exports.HANDSHAKE_SDK_VERSION_MINIMUM_MOBILE_VERSION = HANDSHAKE_SDK_VERSION_MINIMUM_MOBILE_VERSION;
exports.Permissions = Permissions;
exports.UNKNOWN_VERSION_NUMBER = UNKNOWN_VERSION_NUMBER;
