export declare const getQuestEnrollmentStatus: (sendCommand: import("../schema/types").TSendCommand) => (args: {
    quest_id: string;
}) => Promise<{
    quest_id: string;
    is_enrolled: boolean;
    enrolled_at?: string | null | undefined;
}>;
