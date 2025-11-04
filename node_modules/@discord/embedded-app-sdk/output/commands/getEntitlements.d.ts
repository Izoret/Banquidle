import { TSendCommand } from '../schema/types';
/**
 *
 */
export declare const getEntitlements: (sendCommand: TSendCommand) => (args: void) => Promise<{
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
