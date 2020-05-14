
const serviceURL = 'http://localhost:5001/admin';

export const fetchCountryList = async () => {
    const response = await fetch(serviceURL+'/countries', {
        method:"GET"
    })
    return response.json();
}

const sendCountryStats = async (country, method="POST") => {
    const response = await fetch(serviceURL+'/country', {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(country)
    })
    return response.json()
}

export const publishCountryStats = (country) => {
    return sendCountryStats(country);
}

export const updateCountryPublishedStats = (country) => {
    return sendCountryStats(country, "PUT");
}