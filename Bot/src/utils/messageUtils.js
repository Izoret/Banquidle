import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'
import { CONFIG } from '../config.js'

function formatTriesMessage(data) {
    if (!data || Object.keys(data).length === 0) return []

    const sortedEntries = Object.entries(data)
        .map(([id, tries]) => ({ id, tries: parseInt(tries) }))
        .sort((a, b) => a.tries - b.tries)

    const messages = []
    const podiumEmojis = ['🥇', '🥈', '🥉']

    messages.push(`### Podium \\\\`)

    const podiumEntries = sortedEntries.slice(0, 3).map((player, index) => {
        const label = player.tries === 1 ? '1st try !' : `${player.tries} essais`
        return `${podiumEmojis[index]} <${player.id}> : ${label}`
    })

    messages.push(...podiumEntries)
    const others = sortedEntries.slice(3)
    if (others.length > 0) {
        messages.push(`\n**Autrui** \\\\`)
        const otherEntries = others.map(player => {
            return `• <${player.id}> : ${player.tries} essais`
        })
        messages.push(...otherEntries)
    }

    return messages
}

export async function sendBanquidleInvite(client, targetMessage = null, data = {}) {
    const messageLines = formatTriesMessage(data)

    try {
        let channel
        if (targetMessage) {
            channel = targetMessage.channel
        } else {
            const guild = await client.guilds.fetch(CONFIG.GUILD_ID)
            channel = guild.channels.cache.get(CONFIG.TEXT_CHANNEL_ID)
        }

        if (!channel?.isTextBased()) return

        for (const line of messageLines) {
            await channel.send(line)
        }

        const startButton = new ButtonBuilder()
            .setCustomId('start_banquidle')
            .setLabel('Start')
            .setStyle(ButtonStyle.Success)

        const row = new ActionRowBuilder().addComponents(startButton)

        const invitePayload = {
            content: `*Rejoins le Banquidle du jour !*`,
            components: [row]
        }

        if (targetMessage) {
            await targetMessage.reply(invitePayload)
        } else {
            await channel.send(invitePayload)
        }

    } catch (error) {
        console.error("Error sending separate messages:", error)
    }
}
