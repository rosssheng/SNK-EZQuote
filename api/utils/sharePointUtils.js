const axios = require('axios');
const { getAccessToken } = require('./authUtils');

async function getSharePointFile(fileUrl) {
    const accessToken = await getAccessToken();
    try {
        const response = await axios.get(fileUrl, {
            headers: { 
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json;odata=verbose' 
            },
            responseType: 'arraybuffer'
        });
        return response.data;
    } catch (error) {
        console.error('Error retrieving file from SharePoint:', error);
        throw error;
    }
}

module.exports = { getSharePointFile };
