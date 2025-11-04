/**
 * Opens a modal in the user's client to share the Activity link.
 *
 * @param {string} referrer_id
 * @param {string} custom_id
 * @param {string} message - message sent alongside link when shared.
 * @returns {Promise<{success: boolean>} whether or not the user shared the link to someone
 */
export declare const shareLink: (sendCommand: import("../schema/types").TSendCommand) => (args: {
    message: string;
    custom_id?: string | undefined;
    link_id?: string | undefined;
}) => Promise<{
    success: boolean;
    didCopyLink: boolean;
    didSendMessage: boolean;
}>;
