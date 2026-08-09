import {sendBanquidleInvite} from '../utils/messageUtils.js'
import {getLatestPatchNote} from '../services/patchesService.js'
import {fetchDailyTries} from "../services/apiService.js"

export async function handleMessageCreate(message, client) {
    if (message.author.bot) return
    const content = message.content.toLowerCase()

    if (content.startsWith('!banq')) {
        await sendBanquidleInvite(client, message)
    }

    if (content.startsWith('!patch')) {
        const notes = await getLatestPatchNote()
        if (notes.length > 2000) {
            await message.reply("The patch note is too long!")
        } else {
            await message.reply(notes)
        }
    }

    if (content.startsWith('!test')) {
        const data = await fetchDailyTries()
        await sendBanquidleInvite(client, message, data)
    }
}

