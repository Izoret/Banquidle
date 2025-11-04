import { TSendCommand } from '../schema/types';
export declare const getSkus: (sendCommand: TSendCommand) => (args: void) => Promise<{
    skus: {
        type: 1 | 4 | 2 | 3 | 5 | -1;
        id: string;
        name: string;
        flags: number;
        application_id: string;
        price: {
            amount: number;
            currency: string;
        };
        release_date: string | null;
    }[];
}>;
