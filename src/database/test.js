const dataBase = require("./db");
const createProffy = require("./createProffy");
dataBase.then( async (db) => {
    // insert data
    proffyValue = {
        name: "Deivid Almeida",
        avatar: "https://avatars1.githubusercontent.com/u/61792159?s=460&u=a5311a9b0e24a80c478398023b48879cf7b54d96&v=4",
        whatsapp: "4445654",
        bio: "Sempre em constante Evolução",
    }

    classValue = {
        subject: "1",
        cost: "20"
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

     /* await createProffy(db, {proffyValue, classValue, classScheduleValues} ); */
 

 // Consult datas inserted
    const selectedProffys = await db.all("SELECT * FROM proffys");
   // console.log(selectedProffys);

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    
    `);

  //  console.log(selectedClassesAndProffys)

    // o horário que a pessoa trabalha, exemplo:
    // das 8h-18h. // o horario time_from (8h) precisa ser maior ou igual ao horário solicitado 
    // o time_to precisa ser menor que o solicitado (18h)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `);
    // console.log(selectClassesSchedules);
});