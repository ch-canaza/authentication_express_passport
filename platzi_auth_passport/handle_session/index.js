const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    resave: false, // la cookie no se guarda con cada cambio
    saveUninitialized: false, // si no se ha inicializado la cookie no se guarda
    secret: "my secret" // se cifra usando este secret
}))

app.get('/', (req, res) => {
    req.session.count = req.session.count ? req.session.count + 1 : 1;
    res.status(200).json({ hello: 'world', counter: req.session.count })
})

app.listen(3000, () => {
    console.log('Listening http://localhost:3000')
})