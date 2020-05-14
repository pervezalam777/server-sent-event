
const serviceURL = 'http://localhost:5001/connect';

export const connectToServer = () => {
    return new EventSource(serviceURL);
}