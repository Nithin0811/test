const express = require("express");

const bodyParser = require("body-parser");

const fs = require('fs-extra');

const path = require("path")

const app = express();  
const PORT = 5000;
const folderPath = path.join(__dirname, "texts");

if(!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}

function getFormatedFileName() {
    return new Date().toISOString().replace(/:/g, "-");
}

app.post("/createFile", async (req, res) => {
    try {
        await fs.ensureDir(folderPath);
        const time = getFormatedFileName();
        const fileName = `${time}.txt`;
        const filePath = path.join(folderPath, fileName);

        await fs.writeFile(filePath, time);
        res.send("File created successfully!");
    }   catch (error) {
            res.status(500).send("Error writing a file");
        }
});

app.get("/getFile", async (req, res) => {
    try {
      await fs.ensureDir(folderPath);
      const files = await fs.readdir(folderPath);
      const textFiles = files.filter((file) => file.endsWith(".txt"));
      res.json(textFiles);
    } catch (error) {
      res.status(500).send("Error reading folder - ", error);
    }
  });
  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
