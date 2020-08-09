const proffys = [
        {
         name: "Deivid Almeida",
         avatar: "https://avatars1.githubusercontent.com/u/61792159?s=460&u=a5311a9b0e24a80c478398023b48879cf7b54d96&v=4",
         whatsapp: "119999999",
         bio: "Quero provar que química não é tão díficil como fácil é",
         subject: "Química",
         cost: "2000,00",
         weekday: [0],
         time_from: [720],
         time_to: [1220]
        },

        {
            name: "Joao",
            avatar: "https://avatars1.githubusercontent.com/u/61792159?s=460&u=a5311a9b0e24a80c478398023b48879cf7b54d96&v=4",
            whatsapp: "119999999",
            bio: "Quero provar que química não é tão díficil como fácil é",
            subject: "Matemática",
            cost: "1000,00",
            weekday: [1],
            time_from: [720],
            time_to: [1220]
        }
]

const subjects = [
   "Artes",
   "Biologia",
   "Ciência",
   "Física",
   "Geografia",
   "História",
   "Matemática",
   "Português",
   "Química",
   "Inglês"

]

const weekDays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado"
 
 ]

 function getSubject(subjectNumber) {
     const arrayPosition = +subjectNumber - 1;
     return subjects[arrayPosition];
 }

function pageLanding(req, res) {
    return res.render('index.html');

}

function pageStudy(req, res) {
    const filters = req.query;
    return res.render('study.html', {proffys, filters, subjects, weekDays});

}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0;

    if(isNotEmpty) {

        data.subject = getSubject(data.subject);

        proffys.push(data);

        return res.redirect("/study");
    }
  

    return res.render('give-classes.html', {subjects, weekDays});

}

const express = require('express');
const server = express();


const nunjucks = require('nunjucks');
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

server.use(express.static("public"));



server.get("/", pageLanding);

server.get("/study", pageStudy);

server.get("/give-classes", pageGiveClasses);






server.listen(8080);