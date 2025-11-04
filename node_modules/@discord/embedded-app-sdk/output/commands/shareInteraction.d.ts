export declare const shareInteraction: (sendCommand: import("../schema/types").TSendCommand) => (args: {
    command: string;
    options?: {
        value: string;
        name: string;
    }[] | undefined;
    content?: string | undefined;
    require_launch_channel?: boolean | undefined;
    preview_image?: {
        height: number;
        url: string;
        width: number;
    } | undefined;
    components?: {
        type: 1;
        components?: {
            type: 2;
            style: number;
            label?: string | undefined;
            custom_id?: string | undefined;
        }[] | undefined;
    }[] | undefined;
    pid?: number | undefined;
}) => Promise<{
    success: boolean;
}>;
