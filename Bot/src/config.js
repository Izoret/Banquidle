import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

export const C = {
    TOKEN: process.env.TOKEN,
    ACTIVITY_ID: process.env.ACTIVITY_ID,
    GUILD_ID: process.env.GUILD_ID,
    TEXT_CHANNEL_ID: process.env.TEXT_CHANNEL_ID,
    PATCH_NOTES_DIR: path.resolve('res/patches'),
    CRON_SCHEDULE_START: '12 08 * * 1-5',
    CRON_RANDOM_WAIT_MAX_MINUTES: 89,
    TIMEZONE: 'Europe/Paris'
}
