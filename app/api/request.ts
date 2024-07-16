const API_KEY = "01964fa8-f0e5-40fc-a13b-9f5c3a5415f3"
const API_URL = "https://mock-game-api-9a408f047f23.herokuapp.com/api"

export const request = async (input: string) => {
    try {
        const headers = new Headers();

        headers.append("X-API-Key", API_KEY);

        const requestUrl = `${API_URL}/${input}`;

        const responseJson = await fetch(requestUrl, {
            headers,
        })

        const response = await responseJson.json();

        return response;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
}