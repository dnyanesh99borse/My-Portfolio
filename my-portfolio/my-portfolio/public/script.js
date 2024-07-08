 /** creating button click show hide navbar **/
 var togglebtn=document.querySelector(".togglebtn");
 var nav=document.querySelector(".navlinks");
 var links=document.querySelector(".navlinks li");

 togglebtn.addEventListener("click", function(){
     this.classList.toggle("click");
     nav.classList.toggle("open");
 })

 var typed=new Typed(".input",{
     strings:["A Developer","Youtuber","Tech Enthusiast","Tech Student",],
     typedSpeed:90,
     backSpeed:90,
     loop:true
 })

 const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for downloading CV
app.get('/download-cv', (req, res) => {
    const file = `${__dirname}/public/cv.pdf`;
    res.download(file);
});

// Route for resume page
app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'resume.html'));
});

// Route for blog page
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
