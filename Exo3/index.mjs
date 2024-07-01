import fetch from 'node-fetch';


const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const authToken = 'our_token'; 
const fetchOptions = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
    }
};

async function fetchDataWithAuth() {
    try {
        const response = await fetch(apiUrl, fetchOptions);
        if (!response.ok) {
            console.log(response.status);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchDataWithAuth();