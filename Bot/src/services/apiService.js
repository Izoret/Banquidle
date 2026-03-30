export async function fetchDailyTries() {
    try {
        const url = 'http://webapp:3000/api/v0/last_performance'
        const response = await fetch(url)
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        return await response.json()
    } catch (error) {
        console.error(`Failed to fetch daily tries: `, error)
        return null
    }
}

