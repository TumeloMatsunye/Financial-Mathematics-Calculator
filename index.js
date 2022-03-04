let path = require('path');
let express = require('express');
let app = express();
//loading our routers
let mainRouter = require("./mainRoutes.js");
let classRouter = require("./routes/Routes.js");
//loading body-parser
let bodyParser = require('body-parser');
//tell Express to use bodyParser for JSON and URL encoded form bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//mounting our routers
app.use("/", mainRouter);
app.use("/class", classRouter);
app.use('/cdn', express.static('public')); /* this will mount
your public directory to '/cdn'. i.e. your scripts folder
will be at /cdn/scripts */

const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)

