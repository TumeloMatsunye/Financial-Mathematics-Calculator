var sqlite3 = require('sqlite3').verbose();
let count = 0;
let user = {name:"",pass:"",userid:0}
let users =[user]
let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  else console.log('Connected to the in-memory SQlite database.');
});

db.serialize(function () {
  db.run("CREATE TABLE Accounts (userid INT,username TEXT,pass TEXT)");
});

function newuser(name, password) {
  count = count + 1;
  var stmt = db.prepare("INSERT INTO Accounts VALUES (?,?,?)");
  id = count;
  let newuser=user;
  newuser.name=name;
  newuser.pass=password;
  newuser.userid=count;
  users.push(newuser);
  selectuser()
  stmt.run(id, name, password);
  stmt.finalize();
}
function selectuser() {
  db.each("SELECT * FROM Accounts", function (err, row) {
    console.log(row);
  });
}
function finduser(name,pass){
  let bool1 = false;
  let bool2 = false;
  let userid = 0;
  users.forEach(e=>{
    bool1 = e.name.normalize()===name.normalize();
    bool2 = e.pass.normalize()===pass.normalize();
    if(bool2==true && bool1==true)
      {
      userid =e.userid; //console.log("found User match",e)}
  }; })  
  if(userid != 0 )
 {
  return true 
 
 }  else{ return false}
 //console.log("Found",userid)
  //else console.log("not Found")
};



function closedb() {
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
}
module.exports = { db, newuser, selectuser, closedb,count,finduser }