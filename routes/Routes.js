//RESTful api
let path = require('path');
let express = require('express');
let cal = require('../Calculator.js')
let router = express.Router();
let db = require("../db")
let log = [];
let current_user = { name: "none",pass:"none", online: false,activiy:"" }

//------------Test user for the db
db.newuser('JOHN', '123456');


//------------Home page get and post router
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../views', 'class', 'index.html'));
});
router.post('/', function (req, res) {
});
router.post('/api/signup', function (req, res) {
    console.log(`new user :${req.body.uname2}`, req.body.psw2);
     current_user.name = req.body.uname2;
     current_user.online= true;
    db.newuser(req.body.uname2, req.body.psw2);
    db.selectuser();
    // res.send(`<p>Welcome new user ${req.body.uname2}<p>` + htmfile('/class/api/Login', 'Account'))
    res.redirect(req.baseUrl);
});
router.post('/api/login', function (req, res) {
      
    /// console.log(`user :${req.body.uname}`,req.body.psw);
    if (db.finduser(req.body.uname, req.body.psw)) {
        res.send(`<p>Welcome back ${req.body.uname}<p>` + `<br><button onclick="location.href='/'" type="button">
        Home 
      </button>`)
      current_user.name = req.body.uname;
      current_user.pass = req.body.psw;
      current_user.online= true;
      current_user.activiy= 'logged in :'+ Date();
      console.log(current_user);
      log.push({user: current_user.name,activity: current_user.activiy});
    }
    else {
        res.send(`<p>user ${req.body.uname} not founnd<p>` + `<br><button onclick="location.href='/'" type="button">
        Home 
      </button>`)
    }
});



//-------Compound Interest get and post api
router.get('/api/compound_interest', function (req, res) {
    res.sendFile(path.join(__dirname, '../views', 'scripts', 'compound_interest.html'));
  
});
router.post('/api/compound_interest', function (req, res) {
    cal.principalamount = req.body.Pamount;
    cal.interest = req.body.i;
    cal.time = req.body.t;
    cal.number_of_time_i_compounded = req.body.CI;

    res.send(`Compounded Amount is R${cal.compound_intrst()} ` + ` <br><button onclick="location.href='/'" type="button">
    Home 
  </button>`);
  //---- Log-----
  current_user.activiy='Calculated Compound interest '+ ':'+ Date();
  console.log(current_user);
  log.push({user: current_user.name,activity:current_user.activiy});
});
//---------Post tax get and post router
router.post('/api/post_tax', function (req, res) {
    cal.interest = req.body.i2;
    cal.taxrate = req.body.txrate1;
    res.send(`Post tax return is ${cal.post_tax_return()} percent` + `<br><button onclick="location.href='/'" type="button">
    Home 
  </button>`);
  current_user.activiy='Calculated Post tax return'+ ':'+ Date();
  console.log(current_user);
  log.push({user: current_user.name,activity:current_user.activiy});
});

//--------------- Inflation get and post router
router.post('/api/inflation', function (req, res) {
    cal.presentamount = req.body.Pramount;
    cal.inflationrate = req.body.inflarate;
    cal.time = req.body.nyears;

    res.send(`Inflation is R${cal.inflation()}` + `<br><button onclick="location.href='/'" type="button">
    Home 
  </button>`);
  current_user.activiy='Calculated Inflation'+ ':'+ Date();
  log.push({user: current_user.name,activity:current_user.activiy});
});
//------------- Purchasing Power get and post router
router.post('/api/prpower', function (req, res) {
    cal.presentvalue = req.body.Prvalue;
    cal.inflationrate = req.body.inflarate;
    cal.time = req.body.nyears;
    res.send(`Purchasing power is R${cal.purchasing_power()}`+`<br><button onclick="location.href='/'" type="button">
    Home 
  </button>` );
  current_user.activiy='Calculated Purchasing Power'+ ':'+ Date();
  log.push({user: current_user.name,activity:current_user.activiy});
});

//---------- Effective Annual Rate get and post router

router.post('/api/effannrtn', function (req, res) {
    res.send(`Effective Annual rate is ${cal.effective_annual_rate(req.body.nomReturn, req.body.comIntvl)}%`+`<br><button onclick="location.href='/'" type="button">
    Home 
  </button>` )
  current_user.activiy='Calculated EFffc Annual rate'+ ':'+ Date();
  log.push({user: current_user.name,activity:current_user.activiy});
});
//-------------Rule of 72

router.post('/api/ruleof72', function (req, res) {
    cal.interestrate = req.body.Intrstrate;
    res.send(`Rule of 72 answer is ${cal.rule_of_72()} years`+`<br><button onclick="location.href='/'" type="button">
    Home 
  </button>` );
  current_user.activiy='Calculated rule of 72'+ ':'+ Date();
  log.push({user: current_user.name,activity:current_user.activiy});
});
//------------- Compound Annual Rate get and post router
router.post('/api/cagr', function (req, res) {
    cal.future_value = req.body.FV;
    cal.presentvalue = req.body.PV;
    cal.time = req.body.nyears2;
    res.send(`CAGR is ${cal.CAGR()}%`+`<br><button onclick="location.href='/'" type="button">
    Home 
  </button>` );
  current_user.activiy='Calculated CAGR'+ ':'+ Date();
  log.push({user: current_user.name,activity:current_user.activiy});
});
//-----------Loan EMI
router.post('/api/loanemi', function (req, res) {
    cal.loan_amount = req.body.Lamnt;

    cal.interestrate = req.body.intrstrate;

    cal.time = req.body.N;
    cal.intervals = req.body.intrvl;

    res.send(`Loan EMI is R${cal.loan_EMI()} ` +`<br><button onclick="location.href='/'" type="button">
    Home 
  </button>` );
  current_user.activiy='Calculated Loan EMI'+ ':'+ Date();
  log.push({user: current_user.name,activity:current_user.activiy});
});
//----------- Future value of SIP
router.post('/api/futureSIP', function (req, res) {
    cal.regular_monthly_investment = req.body.RMI;

    cal.interestrate = req.body.intrstrate;

    cal.time = req.body.N;

    cal.intervals = req.body.intrvl;
    res.send(`future value of SIP is R${cal.future_value_of_SIP()}` +`<br><button onclick="location.href='/'" type="button">
    Home 
  </button>`);
  current_user.activiy='Calculated future value SIP'+ ':'+ Date();
  log.push({user: current_user.name,activity:current_user.activiy});
});
//--------Liquid ratio
router.post('/api/lqratio', function (req, res) {
    cal.totalassets = req.body.assets;
    cal.totalcurrentdebt = req.body.debt;
    res.send(`Liquidity ratio is ${cal.liquidity_ratio()}` +`<br><button onclick="location.href='/'" type="button">
    Home 
  </button>`);
  current_user.activiy='Calculated liquidity ratio'+ ':'+ Date();
  log.push({user: current_user.name,activity:current_user.activiy});
});

//--------Log
router.get('/api/log', function (req, res) {
    //  log.forEach(element =>{res.json(element)});
    res.json(log)
});
// router.post('/api/log', function (req, res) {
//     //     cal.totalassets = req.body.assets;
//     //     cal.totalcurrentdebt = req.body.debt;
//     // log.forEach(element =>{res.json(`<li>${element}</li>`)}) };
//     res.json(log)
// });

//----------
module.exports = router;
