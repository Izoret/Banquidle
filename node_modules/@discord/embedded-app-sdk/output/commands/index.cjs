'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var common = require('../schema/common.cjs');
var authorize = require('./authorize.cjs');
var captureLog = require('./captureLog.cjs');
var encourageHardwareAcceleration = require('./encourageHardwareAcceleration.cjs');
var getChannel = require('./getChannel.cjs');
var getEntitlements = require('./getEntitlements.cjs');
var getSkus = require('./getSkus.cjs');
var getChannelPermissions = require('./getChannelPermissions.cjs');
var getPlatformBehaviors = require('./getPlatformBehaviors.cjs');
var openExternalLink = require('./openExternalLink.cjs');
var openInviteDialog = require('./openInviteDialog.cjs');
var setActivity = require('./setActivity.cjs');
var setConfig = require('./setConfig.cjs');
var setOrientationLockState = require('./setOrientationLockState.cjs');
var startPurchase = require('./startPurchase.cjs');
var userSettingsGetLocale = require('./userSettingsGetLocale.cjs');
var authenticate = require('./authenticate.cjs');
var getActivityInstanceConnectedParticipants = require('./getActivityInstanceConnectedParticipants.cjs');
var getQuestEnrollmentStatus = require('./getQuestEnrollmentStatus.cjs');
var getRelationships = require('./getRelationships.cjs');
var getUser = require('./getUser.cjs');
var initiateImageUpload = require('./initiateImageUpload.cjs');
var inviteUserEmbedded = require('./inviteUserEmbedded.cjs');
var openShareMomentDialog = require('./openShareMomentDialog.cjs');
var questStartTimer = require('./questStartTimer.cjs');
var shareInteraction = require('./shareInteraction.cjs');
var shareLink = require('./shareLink.cjs');

function commands(sendCommand) {
    return {
        authorize: authorize.authorize(sendCommand),
        captureLog: captureLog.captureLog(sendCommand),
        encourageHardwareAcceleration: encourageHardwareAcceleration.encourageHardwareAcceleration(sendCommand),
        getChannel: getChannel.getChannel(sendCommand),
        getChannelPermissions: getChannelPermissions.getChannelPermissions(sendCommand),
        getEntitlements: getEntitlements.getEntitlements(sendCommand),
        getPlatformBehaviors: getPlatformBehaviors.getPlatformBehaviors(sendCommand),
        getSkus: getSkus.getSkus(sendCommand),
        openExternalLink: openExternalLink.openExternalLink(sendCommand),
        openInviteDialog: openInviteDialog.openInviteDialog(sendCommand),
        setActivity: setActivity.setActivity(sendCommand),
        setConfig: setConfig.setConfig(sendCommand),
        setOrientationLockState: setOrientationLockState.setOrientationLockState(sendCommand),
        startPurchase: startPurchase.startPurchase(sendCommand),
        userSettingsGetLocale: userSettingsGetLocale.userSettingsGetLocale(sendCommand),
        // Backward compatibility - getInstanceConnectedParticipants is an alias for getActivityInstanceConnectedParticipants
        getInstanceConnectedParticipants: getActivityInstanceConnectedParticipants.getActivityInstanceConnectedParticipants(sendCommand),
        // START-GENERATED-SECTION
        authenticate: authenticate.authenticate(sendCommand),
        getActivityInstanceConnectedParticipants: getActivityInstanceConnectedParticipants.getActivityInstanceConnectedParticipants(sendCommand),
        getQuestEnrollmentStatus: getQuestEnrollmentStatus.getQuestEnrollmentStatus(sendCommand),
        getRelationships: getRelationships.getRelationships(sendCommand),
        getUser: getUser.getUser(sendCommand),
        initiateImageUpload: initiateImageUpload.initiateImageUpload(sendCommand),
        inviteUserEmbedded: inviteUserEmbedded.inviteUserEmbedded(sendCommand),
        openShareMomentDialog: openShareMomentDialog.openShareMomentDialog(sendCommand),
        questStartTimer: questStartTimer.questStartTimer(sendCommand),
        shareInteraction: shareInteraction.shareInteraction(sendCommand),
        shareLink: shareLink.shareLink(sendCommand),
        // END-GENERATED-SECTION
    };
}

Object.defineProperty(exports, "Commands", {
    enumerable: true,
    get: function () { return common.Commands; }
});
exports.default = commands;
