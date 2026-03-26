import cron from 'node-cron'
import {CONFIG} from '../config.js'
import {sendBanquidleInvite} from '../utils/messageUtils.js'
import {fetchDailyTries} from "../services/apiService.js";

export async function handleReady(client) {
    console.log(`✅ Bot is ready! Logged in as ${client.user.tag}`)

    cron.schedule(CONFIG.CRON_SCHEDULE, async () => {
        console.log('> running daily..')

        const data = await fetchDailyTries()

        await sendBanquidleInvite(client, null, data)
    }, {
        timezone: CONFIG.TIMEZONE
    })
}
