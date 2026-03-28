export async function fetchDailyTries() {
    try {
        const url = 'http://webapp/api/v0/nb_tries_yesterday'
        const response = await fetch(url)
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        return await response.json()
    } catch (error) {
        console.error(`Failed to fetch daily tries: `, error)
        return null
    }
}

