import cron from 'node-cron'
import {C} from '../config.js'
import {sendBanquidleInvite} from '../utils/messageUtils.js'
import {fetchDailyTries} from "../services/apiService.js"

export async function handleReady(client) {
    console.log(`✅ Bot is ready! Logged in as ${client.user.tag}`)

    cron.schedule(C.CRON_SCHEDULE_START, async () => {
        const randomDelayMs = Math.floor(Math.random() * 1000 * 60 * C.CRON_RANDOM_WAIT_MAX_MINUTES)
        const scheduledTime = new Date(Date.now() + randomDelayMs)

        console.log('> running daily in ' + randomDelayMs + ' minutes..')

        setTimeout(async() => {
            console.log("> Sending !")
            try {
                const data = await fetchDailyTries()
                await sendBanquidleInvite(client, null, data)
            } catch (error) {
                console.error("fuck. " + error)
            }
        }, randomDelayMs)
    }, {
        timezone: C.TIMEZONE
    })
}
