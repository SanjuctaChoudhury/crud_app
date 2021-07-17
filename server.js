require('./models/db.js')
const express=require("express")
const employeecontroller=require('./controllers/employee_controllers')
const path=require('path')
const exphbs  = require('express-handlebars');
const bodyparser=require('body-parser')
const port=process.env.PORT||3000
const app=express()

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'))
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }))
app.set('view engine','hbs')

app.get("/",(req,res)=>
{
    res.send('mainLayout')
})
app.use('/employee',employeecontroller)
app.listen(port,()=>{
console.log("server running successfully")
})
