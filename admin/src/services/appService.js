
const serviceURL = 'http://localhost:5001/admin';

export const fetchCountryList = async () => {
    const response = await fetch(serviceURL+'/countries', {
        method:"GET"
    })
    const data = response.json();
    return data
}