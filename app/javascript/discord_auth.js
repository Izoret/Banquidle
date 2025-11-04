import {DiscordSDK} from "@discord/embedded-app-sdk"

// Helper to get the CSRF token from the meta tags Rails adds
function getCsrfToken() {
    const tokenTag = document.querySelector('meta[name="csrf-token"]')
    return tokenTag ? tokenTag.content : ""
}

function getDiscordClientId() {
    const clientIdTag = document.querySelector('meta[name="discord-client-id"]')
    if (!clientIdTag || !clientIdTag.content) {
        console.error("Discord Client ID meta tag not found or is empty. Please add: <meta name='discord-client-id' content='YOUR_ID_HERE'> to your layout.")
        return null
    }
    return clientIdTag.content
}

let auth

async function setupDiscordSdk() {
    const discordClientId = getDiscordClientId()
    if (!discordClientId) return

    const discordSdk = new DiscordSDK(discordClientId)
    await discordSdk.ready()
    console.log("Discord SDK is ready")

    const {code} = await discordSdk.commands.authorize({
        client_id: discordClientId, response_type: "code", state: "", prompt: "none", scope: ["identify", "guilds"],
    })

    const response = await fetch("/api/token", {
        method: "POST", headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({
            code
        })
    })

    const {access_token} = await response.json()

    auth = await discordSdk.commands.authenticate({access_token})

    if (auth == null) throw new Error("Discord SDK: Authenticate command failed")

    console.log("Discord SDK is authenticated!")
    console.log("Authenticated as:", auth.user.username)

    document.dispatchEvent(new CustomEvent("discord:authenticated", {detail: {auth}}))
}

document.addEventListener("DOMContentLoaded", () => {
    setupDiscordSdk()
        .catch(err => console.error("Discord SDK setup failed:", err))
})

