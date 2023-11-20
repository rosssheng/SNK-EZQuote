// sharepointRoutes.js
const express = require('express');
const { getSharePointFile } = require('../utils/sharePointUtils');
const router = express.Router();

router.get('/get-excel', async (req, res) => {
    const siteId = 'snkamerica.sharepoint.com,10e84d49-4ea3-466a-974f-993b05f035ee,70692aa4-e35e-4884-9ca7-714eb472464b'; 
    const itemId = 'YOUR_ITEM_ID'; // Replace with your SharePoint item ID

    try {
        const fileData = await getSharePointFile(siteId, itemId);
        res.setHeader('Content-Disposition', 'attachment; filename="downloadedFile.xlsx"');
        res.send(fileData);
    } catch (error) {
        console.error('Error retrieving file from SharePoint via Graph API:', error);
        res.status(500).send('Failed to retrieve file from SharePoint via Graph API');
    }
});

module.exports = router;

//TODO: need to be able to query microsoft graph

//https://graph.microsoft.com/v1.0/sites/snkamerica.sharepoint.com,10e84d49-4ea3-466a-974f-993b05f035ee,70692aa4-e35e-4884-9ca7-714eb472464b/drive/root/children
//msales - "01GIUOMFRFSXO633THFNGILLUWT3ZNGNSP"
//operation - 01GIUOMFTJNKXFRJK4TBG26SITEAB7E6FT

//TODO: query this and find a file id for retrieval test
// https://graph.microsoft.com/v1.0/sites/snkamerica.sharepoint.com,10e84d49-4ea3-466a-974f-993b05f035ee,70692aa4-e35e-4884-9ca7-714eb472464b/drive/items/01GIUOMFRFSXO633THFNGILLUWT3ZNGNSP/children