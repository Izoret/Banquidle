export declare const getRelationships: (sendCommand: import("../schema/types").TSendCommand) => (args: void) => Promise<{
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
