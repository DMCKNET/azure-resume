window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl = 'https://azgetresumecounter.azurewebsites.net/api/AZGetResumeCounter?code=s9cUkW2oxEwVyWgWu3KDBSz6vpqjvtQy4JnyjdScs5MOAzFuhcu4ng%3D%3D';
const authorizationKey = 'https://azgetresumecounter.azurewebsites.net/api/AZGetResumeCounter?code=s9cUkW2oxEwVyWgWu3KDBSz6vpqjvtQy4JnyjdScs5MOAzFuhcu4ng%3D%3D';

const getVisitCount = async () => {
    let count = 30;
    try {
        const response = await fetch(functionApiUrl, {
            headers: {
                'Authorization': `Bearer ${authorizationKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data || !data.count) {
            throw new Error("Invalid response format");
        }

        console.log("Website called function API");
        count = data.count;
        document.getElementById("counter").innerText = count;
    } catch (error) {
        console.error("Error fetching visitor count:", error);
    }

    return count;
};