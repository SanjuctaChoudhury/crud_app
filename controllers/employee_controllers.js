const express=require("express")
var router =express.Router()
const mongoose=require('mongoose')
const employee=mongoose.model('employee')
router.get("/",(req,res)=>
{
    res.render("employee/addoredit",{
        viewTitle:"Insert Employee"
    })
})
router.post("/",(req,res)=>
{
    if (req.body._id == '')
    insertrecord(req, res);
    else
    updateRecord(req, res);
})
function insertrecord(req,res)
{
var employeecreate=new employee()//employee is the model and employeecreate an entry
employeecreate.fullname = req.body.fullname
employeecreate.email = req.body.email
employeecreate.mobile = req.body.mobile
employeecreate.city = req.body.city
employeecreate.save((err, doc) => {
    if (!err)
        res.redirect('employee/list');
    else {
        if (err.name == 'ValidationError') {
            handleValidationError(err, req.body);
            res.render("employee/addOrEdit", {
                viewTitle: "Insert Employee",
                employee: req.body
            });
        }
        else
            console.log('Error during record insertion : ' + err);
    }
});
}
function updateRecord(req, res) {
    employee.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('employee/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("employee/addOrEdit", {
                    viewTitle: 'Update Employee',
                    employee: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}
router.get('/list', (req, res) => {
    employee.find((err, docs) => {
        if (!err) {
            res.render("employee/list", {
                list:docs
            })
        }
        else {
            console.log('Error in retrieving employee list :' + err)
        }
    }).lean()
})

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'fullname':
                body['fullnameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}
router.get('/:id', (req, res) => {
    employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("employee/addOrEdit", {
                viewTitle: "Update Employee",
                employee: doc
            })
        }
    }).lean()
})

router.get('/delete/:id', (req, res) => {
    employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/employee/list')
        }
        else { console.log('Error in employee delete :' + err); }
    })
})


module.exports=router