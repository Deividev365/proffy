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
 
 const weekday = [
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

  function convertHoursToMinutes(time) {
     const [hour, minutes] = time.split(":");
     return Number((hour * 60) + minutes)
  }

  module.exports = {
      subjects,
      weekday,
      getSubject,
      convertHoursToMinutes
  }
 