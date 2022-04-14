let express = require('express');

let app = express();
const path = require('path');

app.use(express.static('public'));

app.listen(process.env.PORT || 3030, () => console.log('Servidor corriendo en http://localhost:3030'));

/* const publicPath = path.resolve(__dirname, './public'); */

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));

});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
