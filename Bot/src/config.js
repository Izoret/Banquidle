import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

export const C = {
    TOKEN: process.env.BOT_TOKEN,
    ACTIVITY_ID: process.env.BOT_ACTIVITY_ID,
    GUILD_ID: process.env.BOT_GUILD_ID,
    TEXT_CHANNEL_ID: process.env.BOT_TEXT_CHANNEL_ID,
    PATCH_NOTES_DIR: path.resolve('res/patches'),
    CRON_SCHEDULE_START: '12 08 * * 1-5',
    CRON_RANDOM_WAIT_MAX_MINUTES: 89,
    TIMEZONE: 'Europe/Paris'
}
