const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

let initialPath = path.join(__dirname, 'public')
let app = express();

app.use(express.static(initialPath));
app.use(express.json());

app.get('/',(req,res)  => {
    res.sendFile(path.join(initialPath, 'index.html'));
})

app.listen(3000, ()=>{
    console.log("su");
})

app.post("/mail", (req,res)=>{
const {
    firstname, lastname, email, msg
} = req.body;
const trasporter = nodemailer.createTransport({
    service: 'mail.ru',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})
const mailOption ={
    from: 'jjjjjjjjjjjjjijjjjjjjjjjj@mail.ru',
    to: 'jjjjjjjjjjjjjijjjjjjjjjjj@mail.ru',
    subject: 'кто то написал нам урааа',
    text: `First name: ${firstname}, \nФамилия: ${lastname}, \nПочта; ${email}, \nСообщение: ${msg}`
}

trasporter.sendMail(mailOption, (err, result)=>{
    if(err){
        console.log(err);
        res.json("ОШИБКА ИДИ ИСПРАВЛЯЙ ")
    }
    else{
        req.json("ВСЁ РЕШЕНО")
    }
    })
}) 
