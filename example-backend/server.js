const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

// Function to build the folder structure
function buildFolderStructure(dirPath) {
    const folderStructure = [];

    const items = fs.readdirSync(dirPath);

    items.forEach(item => {
        const itemPath = path.join(dirPath, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
            folderStructure.push({
                type: 'folder',
                name: item,
                path: itemPath,
                children: buildFolderStructure(itemPath) });
        } else {
            folderStructure.push({
                type: 'file',
                name: item,
                path: itemPath
            });
        }
    });

    return folderStructure;
}

app.post('/get-folder-structure', (req, res) => {
    const { folderPath } = req.body;

    if (!folderPath) {
        return res.status(400).send({ error: 'Folder path is required' });
    }

    try {
        const stats = fs.statSync(folderPath);

        if (stats.isDirectory()) {
            const structure = buildFolderStructure(folderPath);
            res.json(structure);
        } else {
            res.status(400).send({ error: 'Provided path is not a folder' });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


//Example Curl curl -X POST http://localhost:3000/get-folder-structure -H "Content-Type: application/json" -d "{\"folderPath\":\"C:\\\\Users\\\\SUBINOY\\\\Desktop\\\\Excercises\\\\file-browser\\\\app\"}"
