const axios = require('axios');

const CLIENT_ID = 'e28a46d9-76fa-4ded-8fcb-340c51f7daf0'
const CLIENT_SECRET = 'fYT8Q~Jx4cKyNN~O64DQzPDpaHRnn2ePcBXMjaxr'
const TENANT_ID = 'fb1116df-a959-404d-9352-7a9a5fa7823e'
const RESOURCE = 'https://graph.microsoft.com/';

async function getAccessToken() {
    const url = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`;
    const params = new URLSearchParams();
    params.append('client_id', CLIENT_ID);
    params.append('scope', `${RESOURCE}/.default`);
    params.append('client_secret', CLIENT_SECRET);
    params.append('grant_type', 'client_credentials');

    try {
        const response = await axios.post(url, params.toString(), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        return response.data.access_token;
    } catch (error) {
        console.error(`Failed to get access token: ${error.message}`);
        if (error.response) {
            // Log more details from the response
            console.error('Error response details:', error.response.data);
        }
        // Re-throw the error to handle it further up the call stack if necessary
        throw error;
    }
}



module.exports = { getAccessToken };