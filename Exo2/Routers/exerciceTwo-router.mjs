import {Router} from 'express';
import fetch from 'node-fetch';

function wait(delay){
    return new Promise((resolve) => setTimeout(resolve, delay));
}

async function fetchWithRetry(url, delay, tries, fetchOptions = {}) {
    while (tries > 0) {
        try {
            const response = await fetch(url, fetchOptions);
            if (response.ok) {
                return response;
            } else {
                throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            if (tries === 1) {
                throw new Error('All attempts failed. Please try again later.');
            }
            tries -= 1;
            await wait(delay);
        }
    }
}

export { fetchWithRetry, wait };


//  http://localhost:3000/fetch-with-retry?url=https://v6.exchangerate-api.com/v6/1aaa0637773aef407f41520c/latest/USD&delay=1000&tries=3