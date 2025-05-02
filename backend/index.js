const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.static('public'));

// Ensure uploads folder exists
const uploadDir = './public/uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, 'resume' + path.extname(file.originalname)); 
    // Always save as resume.pdf or resume.docx etc
  }
});

// Initialize upload
const upload = multer({ storage: storage }).single('resume');

// API Endpoint for uploading resume
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        console.error('Upload Error:', err);
        return res.status(400).send('Error uploading file.');
      }
  
      if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }
  
      console.log('Resume uploaded successfully.');
      res.send('Resume uploaded successfully.');
    });
  });
  
// Start Server
app.listen(PORT, () => {
  console.log(`✅ Backend server running at http://localhost:${PORT}`);
});
