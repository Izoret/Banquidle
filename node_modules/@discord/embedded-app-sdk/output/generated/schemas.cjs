'use strict';

var index = require('../lib/zod/lib/index.cjs');
var zodUtils = require('../utils/zodUtils.cjs');

/**
 * This file is generated.
 * Run "npm run sync" to regenerate file.
 * @generated
 */
// INITIATE_IMAGE_UPLOAD
const InitiateImageUploadResponseSchema = index.default
    .object({ image_url: index.default.string() })
    .describe('Response for "INITIATE_IMAGE_UPLOAD" Command');
// OPEN_SHARE_MOMENT_DIALOG
const OpenShareMomentDialogRequestSchema = index.default
    .object({ mediaUrl: index.default.string().max(1024) })
    .describe('Request for "OPEN_SHARE_MOMENT_DIALOG" Command');
// AUTHENTICATE
const AuthenticateRequestSchema = index.default
    .object({ access_token: index.default.union([index.default.string(), index.default.null()]).optional() })
    .describe('Request for "AUTHENTICATE" Command');
const AuthenticateResponseSchema = index.default
    .object({
    access_token: index.default.string(),
    user: index.default.object({
        username: index.default.string(),
        discriminator: index.default.string(),
        id: index.default.string(),
        avatar: index.default.union([index.default.string(), index.default.null()]).optional(),
        public_flags: index.default.number(),
        global_name: index.default.union([index.default.string(), index.default.null()]).optional(),
    }),
    scopes: index.default.array(zodUtils.fallbackToDefault(index.default
        .enum([
        'identify',
        'email',
        'connections',
        'guilds',
        'guilds.join',
        'guilds.members.read',
        'guilds.channels.read',
        'gdm.join',
        'bot',
        'rpc',
        'rpc.notifications.read',
        'rpc.voice.read',
        'rpc.voice.write',
        'rpc.video.read',
        'rpc.video.write',
        'rpc.screenshare.read',
        'rpc.screenshare.write',
        'rpc.activities.write',
        'webhook.incoming',
        'messages.read',
        'applications.builds.upload',
        'applications.builds.read',
        'applications.commands',
        'applications.commands.permissions.update',
        'applications.commands.update',
        'applications.store.update',
        'applications.entitlements',
        'activities.read',
        'activities.write',
        'activities.invites.write',
        'relationships.read',
        'relationships.write',
        'voice',
        'dm_channels.read',
        'role_connections.write',
        'presences.read',
        'presences.write',
        'openid',
        'dm_channels.messages.read',
        'dm_channels.messages.write',
        'gateway.connect',
        'account.global_name.update',
        'payment_sources.country_code',
        'sdk.social_layer_presence',
        'sdk.social_layer',
        'lobbies.write',
        'application_identities.write',
    ])
        .or(index.default.literal(-1))
        .default(-1))),
    expires: index.default.string(),
    application: index.default.object({
        description: index.default.string(),
        icon: index.default.union([index.default.string(), index.default.null()]).optional(),
        id: index.default.string(),
        rpc_origins: index.default.array(index.default.string()).optional(),
        name: index.default.string(),
    }),
})
    .describe('Response for "AUTHENTICATE" Command');
// GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS
const GetActivityInstanceConnectedParticipantsResponseSchema = index.default
    .object({
    participants: index.default.array(index.default.object({
        id: index.default.string(),
        username: index.default.string(),
        global_name: index.default.union([index.default.string(), index.default.null()]).optional(),
        discriminator: index.default.string(),
        avatar: index.default.union([index.default.string(), index.default.null()]).optional(),
        flags: index.default.number(),
        bot: index.default.boolean(),
        avatar_decoration_data: index.default
            .union([
            index.default.object({ asset: index.default.string(), skuId: index.default.string().optional(), expiresAt: index.default.number().optional() }),
            index.default.null(),
        ])
            .optional(),
        premium_type: index.default.union([index.default.number(), index.default.null()]).optional(),
        nickname: index.default.string().optional(),
    })),
})
    .describe('Response for "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS" Command');
// SHARE_INTERACTION
const ShareInteractionRequestSchema = index.default
    .object({
    command: index.default.string(),
    options: index.default.array(index.default.object({ name: index.default.string(), value: index.default.string() })).optional(),
    content: index.default.string().max(2000).optional(),
    require_launch_channel: index.default.boolean().optional(),
    preview_image: index.default.object({ height: index.default.number(), url: index.default.string(), width: index.default.number() }).optional(),
    components: index.default
        .array(index.default.object({
        type: index.default.literal(1),
        components: index.default
            .array(index.default.object({
            type: index.default.literal(2),
            style: index.default.number().gte(1).lte(5),
            label: index.default.string().max(80).optional(),
            custom_id: index.default
                .string()
                .max(100)
                .describe('Developer-defined identifier for the button; max 100 characters')
                .optional(),
        }))
            .max(5)
            .optional(),
    }))
        .optional(),
    pid: index.default.number().optional(),
})
    .describe('Request for "SHARE_INTERACTION" Command');
const ShareInteractionResponseSchema = index.default
    .object({ success: index.default.boolean() })
    .describe('Response for "SHARE_INTERACTION" Command');
// SHARE_LINK
const ShareLinkRequestSchema = index.default
    .object({
    custom_id: index.default.string().max(64).optional(),
    message: index.default.string().max(1000),
    link_id: index.default.string().max(64).optional(),
})
    .describe('Request for "SHARE_LINK" Command');
const ShareLinkResponseSchema = index.default
    .object({ success: index.default.boolean(), didCopyLink: index.default.boolean(), didSendMessage: index.default.boolean() })
    .describe('Response for "SHARE_LINK" Command');
// GET_RELATIONSHIPS
const GetRelationshipsResponseSchema = index.default
    .object({
    relationships: index.default.array(index.default.object({
        type: index.default.number(),
        user: index.default.object({
            id: index.default.string(),
            username: index.default.string(),
            global_name: index.default.union([index.default.string(), index.default.null()]).optional(),
            discriminator: index.default.string(),
            avatar: index.default.union([index.default.string(), index.default.null()]).optional(),
            flags: index.default.number(),
            bot: index.default.boolean(),
            avatar_decoration_data: index.default
                .union([
                index.default.object({ asset: index.default.string(), skuId: index.default.string().optional(), expiresAt: index.default.number().optional() }),
                index.default.null(),
            ])
                .optional(),
            premium_type: index.default.union([index.default.number(), index.default.null()]).optional(),
        }),
        presence: index.default
            .object({
            status: index.default.string(),
            activity: index.default
                .union([
                index.default.object({
                    session_id: index.default.string().optional(),
                    type: index.default.number().optional(),
                    name: index.default.string(),
                    url: index.default.union([index.default.string(), index.default.null()]).optional(),
                    application_id: index.default.string().optional(),
                    status_display_type: index.default.number().optional(),
                    state: index.default.string().optional(),
                    state_url: index.default.string().optional(),
                    details: index.default.string().optional(),
                    details_url: index.default.string().optional(),
                    emoji: index.default
                        .union([
                        index.default.object({
                            name: index.default.string(),
                            id: index.default.union([index.default.string(), index.default.null()]).optional(),
                            animated: index.default.union([index.default.boolean(), index.default.null()]).optional(),
                        }),
                        index.default.null(),
                    ])
                        .optional(),
                    assets: index.default
                        .object({
                        large_image: index.default.string().optional(),
                        large_text: index.default.string().optional(),
                        large_url: index.default.string().optional(),
                        small_image: index.default.string().optional(),
                        small_text: index.default.string().optional(),
                        small_url: index.default.string().optional(),
                    })
                        .optional(),
                    timestamps: index.default.object({ start: index.default.number().optional(), end: index.default.number().optional() }).optional(),
                    party: index.default
                        .object({
                        id: index.default.string().optional(),
                        size: index.default.array(index.default.number()).min(2).max(2).optional(),
                        privacy: index.default.number().optional(),
                    })
                        .optional(),
                    secrets: index.default.object({ match: index.default.string().optional(), join: index.default.string().optional() }).optional(),
                    sync_id: index.default.string().optional(),
                    created_at: index.default.number().optional(),
                    instance: index.default.boolean().optional(),
                    flags: index.default.number().optional(),
                    metadata: index.default.object({}).optional(),
                    platform: index.default.string().optional(),
                    supported_platforms: index.default.array(index.default.string()).optional(),
                    buttons: index.default.array(index.default.string()).optional(),
                    hangStatus: index.default.string().optional(),
                }),
                index.default.null(),
            ])
                .optional(),
        })
            .optional(),
    })),
})
    .describe('Response for "GET_RELATIONSHIPS" Command');
// INVITE_USER_EMBEDDED
const InviteUserEmbeddedRequestSchema = index.default
    .object({ user_id: index.default.string(), content: index.default.string().min(0).max(1024).optional() })
    .describe('Request for "INVITE_USER_EMBEDDED" Command');
// GET_USER
const GetUserRequestSchema = index.default.object({ id: index.default.string().max(64) }).describe('Request for "GET_USER" Command');
const GetUserResponseSchema = index.default.union([
    index.default.object({
        id: index.default.string(),
        username: index.default.string(),
        global_name: index.default.union([index.default.string(), index.default.null()]).optional(),
        discriminator: index.default.string(),
        avatar: index.default.union([index.default.string(), index.default.null()]).optional(),
        flags: index.default.number(),
        bot: index.default.boolean(),
        avatar_decoration_data: index.default
            .union([index.default.object({ asset: index.default.string(), skuId: index.default.string().optional(), expiresAt: index.default.number().optional() }), index.default.null()])
            .optional(),
        premium_type: index.default.union([index.default.number(), index.default.null()]).optional(),
    }),
    index.default.null(),
]);
// GET_QUEST_ENROLLMENT_STATUS
const GetQuestEnrollmentStatusRequestSchema = index.default
    .object({ quest_id: index.default.string() })
    .describe('Request for "GET_QUEST_ENROLLMENT_STATUS" Command');
const GetQuestEnrollmentStatusResponseSchema = index.default
    .object({ quest_id: index.default.string(), is_enrolled: index.default.boolean(), enrolled_at: index.default.union([index.default.string(), index.default.null()]).optional() })
    .describe('Response for "GET_QUEST_ENROLLMENT_STATUS" Command');
// QUEST_START_TIMER
const QuestStartTimerRequestSchema = index.default
    .object({ quest_id: index.default.string() })
    .describe('Request for "QUEST_START_TIMER" Command');
const QuestStartTimerResponseSchema = index.default
    .object({ success: index.default.boolean() })
    .describe('Response for "QUEST_START_TIMER" Command');
/**
 * RPC Commands which support schemas.
 */
exports.Command = void 0;
(function (Command) {
    Command["INITIATE_IMAGE_UPLOAD"] = "INITIATE_IMAGE_UPLOAD";
    Command["OPEN_SHARE_MOMENT_DIALOG"] = "OPEN_SHARE_MOMENT_DIALOG";
    Command["AUTHENTICATE"] = "AUTHENTICATE";
    Command["GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"] = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS";
    Command["SHARE_INTERACTION"] = "SHARE_INTERACTION";
    Command["SHARE_LINK"] = "SHARE_LINK";
    Command["GET_RELATIONSHIPS"] = "GET_RELATIONSHIPS";
    Command["INVITE_USER_EMBEDDED"] = "INVITE_USER_EMBEDDED";
    Command["GET_USER"] = "GET_USER";
    Command["GET_QUEST_ENROLLMENT_STATUS"] = "GET_QUEST_ENROLLMENT_STATUS";
    Command["QUEST_START_TIMER"] = "QUEST_START_TIMER";
})(exports.Command || (exports.Command = {}));
const emptyResponseSchema = index.default.object({}).optional().nullable();
const emptyRequestSchema = index.default.void();
/**
 * Request & Response schemas for each supported RPC Command.
 */
const Schemas = {
    [exports.Command.INITIATE_IMAGE_UPLOAD]: {
        request: emptyRequestSchema,
        response: InitiateImageUploadResponseSchema,
    },
    [exports.Command.OPEN_SHARE_MOMENT_DIALOG]: {
        request: OpenShareMomentDialogRequestSchema,
        response: emptyResponseSchema,
    },
    [exports.Command.AUTHENTICATE]: {
        request: AuthenticateRequestSchema,
        response: AuthenticateResponseSchema,
    },
    [exports.Command.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
        request: emptyRequestSchema,
        response: GetActivityInstanceConnectedParticipantsResponseSchema,
    },
    [exports.Command.SHARE_INTERACTION]: {
        request: ShareInteractionRequestSchema,
        response: ShareInteractionResponseSchema,
    },
    [exports.Command.SHARE_LINK]: {
        request: ShareLinkRequestSchema,
        response: ShareLinkResponseSchema,
    },
    [exports.Command.GET_RELATIONSHIPS]: {
        request: emptyRequestSchema,
        response: GetRelationshipsResponseSchema,
    },
    [exports.Command.INVITE_USER_EMBEDDED]: {
        request: InviteUserEmbeddedRequestSchema,
        response: emptyResponseSchema,
    },
    [exports.Command.GET_USER]: {
        request: GetUserRequestSchema,
        response: GetUserResponseSchema,
    },
    [exports.Command.GET_QUEST_ENROLLMENT_STATUS]: {
        request: GetQuestEnrollmentStatusRequestSchema,
        response: GetQuestEnrollmentStatusResponseSchema,
    },
    [exports.Command.QUEST_START_TIMER]: {
        request: QuestStartTimerRequestSchema,
        response: QuestStartTimerResponseSchema,
    },
};

exports.AuthenticateRequestSchema = AuthenticateRequestSchema;
exports.AuthenticateResponseSchema = AuthenticateResponseSchema;
exports.GetActivityInstanceConnectedParticipantsResponseSchema = GetActivityInstanceConnectedParticipantsResponseSchema;
exports.GetQuestEnrollmentStatusRequestSchema = GetQuestEnrollmentStatusRequestSchema;
exports.GetQuestEnrollmentStatusResponseSchema = GetQuestEnrollmentStatusResponseSchema;
exports.GetRelationshipsResponseSchema = GetRelationshipsResponseSchema;
exports.GetUserRequestSchema = GetUserRequestSchema;
exports.GetUserResponseSchema = GetUserResponseSchema;
exports.InitiateImageUploadResponseSchema = InitiateImageUploadResponseSchema;
exports.InviteUserEmbeddedRequestSchema = InviteUserEmbeddedRequestSchema;
exports.OpenShareMomentDialogRequestSchema = OpenShareMomentDialogRequestSchema;
exports.QuestStartTimerRequestSchema = QuestStartTimerRequestSchema;
exports.QuestStartTimerResponseSchema = QuestStartTimerResponseSchema;
exports.Schemas = Schemas;
exports.ShareInteractionRequestSchema = ShareInteractionRequestSchema;
exports.ShareInteractionResponseSchema = ShareInteractionResponseSchema;
exports.ShareLinkRequestSchema = ShareLinkRequestSchema;
exports.ShareLinkResponseSchema = ShareLinkResponseSchema;
