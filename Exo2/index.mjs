import { fetchWithRetry } from './Routers/exerciceTwo-router.mjs'

async function main() {
    const url = 'https://example.com/invalid-url'; 
    // const url = 'https://v6.exchangerate-api.com/v6/1aaa0637773aef407f41520c/latest/USD';
    const delay = 1000;
    const tries = 3;
    const fetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
    };

    try {
        const response = await fetchWithRetry(url, delay, tries, fetchOptions);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error retrieving data:', error.message);
    }
}

main();
