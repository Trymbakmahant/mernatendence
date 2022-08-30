const router = require("express").Router();
const Attendance = require("../models/attendance");

router.route("/").post( async(req, res) => { 
   let check = "";
  var date1 = new Date();
  date1.setHours(5,29,59,0);
 
   const  date = new Date();
  // now you can get the ISO string
  // var isodate = date1.toISOString();

  
  const me = await Attendance.find({
    $and: [
      { id: req.body.id },
      { date: { $gt: date1 } },
      
    ],
  });
  const y = JSON.parse(JSON.stringify(me[me.length -1]))
  const date12 = new Date(y.date);
//   const isEmpty = Object.keys(me).length === 0;
// console.log(isEmpty); // 👉️ true

 // console.log(req.body);

  const id = req.body.id;
  
  
  if(me.length > 0 ){
    
   
   
    const ss = (date - date12) / (1000 * 60*60 );
    console.log(`${ss} ${date} ${date12}`); 

    if(ss < 4){
      res.json("you can't go rn ") ;
    }else{
      check = "checkout"; 
      const attend = new Attendance({
        id,
        date,
        check ,
      });
        
    
    
      attend
        .save()
        .then( res.json("you can go now ") )
        .catch((err) => {
          console.log(err);
        });
    }
    
  }else{
    check = "checkin";
    const attend = new Attendance({
      id,
      date,
      check ,
    });
      
  
  
    attend
      .save()
      .then( res.json(me[me.length -1]) )
      .catch((err) => {
        console.log(err);
      });
  }

  
 

    
});

router.route("/attend").get(async (req, res) => {
  const date1 = new Date(req.body.start);
  const date2 = new Date(req.body.end);

  const me = await Attendance.find({
    $and: [
      { id: req.body.id },
      { date: { $gt: req.body.start } },
      { date: { $lt: req.body.end } },
    ],
  });
  const days = (date2 - date1) / (1000 * 60 * 60 * 24) - 1;
  console.log(days); // it gives us the days btween the end and the starting date ;

  return res.json(me);
});

module.exports = router;
