export declare const getUser: (sendCommand: import("../schema/types").TSendCommand) => (args: {
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
