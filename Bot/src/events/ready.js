import cron from 'node-cron'
import {C} from '../config.js'
import {sendBanquidleInvite} from '../utils/messageUtils.js'
import {fetchDailyTries} from "../services/apiService.js";

export async function handleReady(client) {
    console.log(`✅ Bot is ready! Logged in as ${client.user.tag}`)

    cron.schedule(C.CRON_SCHEDULE_START, async () => {
        console.log('> running daily..')

        const data = await fetchDailyTries()

        await sendBanquidleInvite(client, null, data)
    }, {
        timezone: C.TIMEZONE
    })
}
