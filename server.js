const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/blog', (req, res) => {
    // Replace with your blog generation logic
    res.send('Blog page');
});

app.get('/download-cv', (req, res) => {
    res.download(path.join(__dirname, 'public', 'path/to/your/cv.pdf'), 'Dnyaneshwar_Borse_CV.pdf');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
