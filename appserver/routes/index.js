const express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const cors =require('cors');
const PORT =3000;
const app =express();
const mysql =require('mysql');
const connection = mysql.createConnection({
   host :'localhost',
   user :'root',
   password : 'mariadb1',
   database: 'exam'

});

app.use(bodyParser.json());
app.use(cors());
app.get('/',function(req,res){
   res.send('Hello from server');
})

app.post('/enroll',function(req,res){
  connection.connect(function(err){
    if(err)
    {
      console.log(err);
    }
    else{
      console.log("connected to mysql database");
      var query = "insert into personal_detail set ?";
      connection.query(query,req.body,function(err,result){
        if(err)
        {
          console.log(err);
        }
        else{
          console.log(result.affectedRows+ 'rows affected');
          console.log(req.body);
        }
      })
      connection.end();
    }
  })
  res.status(200).send({"message": "Data received"});
})

app.listen(PORT,function(){
  console.log("server is running on localhost:" + PORT);
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
