const express = require('express')
const router = express.Router()
const Reimbursment = require('./../model/User')
const num1 = require('./../model/inc')


/*var c
num1.find({}).then(results=>{
    console.log("C value: ",results[0].num)
    c = results[0].num
    console.log("C = ",c)
})*/
router.post('/reimbursment', (req,res) =>{
    res.header("Access-Control-Allow-Origin","*");
    var x = new Date()
    console.log(x.getTime())
    /*num1.findOneAndUpdate({},{
        
        "num": c+1
      
    }).then(result =>{
      console.log("Updated C value: ",result)
    })*/
    let {studentnames,name,year,totalfee,from,type} = req.body
    console.log("The requested body",req.body)
    studentnames = studentnames.trim()
    name = name.trim()
    year - year
    totalfee = totalfee
    from = from.trim()
    type = type.trim()
    const newReimbursement = new Reimbursment({
        studentnames,
        name,
        year,
        totalfee,
        from,
        type
    });
    newReimbursement.save().then(result =>{
        console.log("Result",result)
        res.json({
            status: "SUCCESS",
            message: "Fee Reimbursement Added"
        })
    })
})

router.get('/return', (req,res) =>{
    res.header("Access-Control-Allow-Origin","*");
    var c 
    var ident
    num1.find({}).then(result =>{
        console.log("C value: ",result)
        c = result[0].num
        console.log("Num: ",c)
        ident = result[0].id
        change = {num: c}
        console.log("Change = ",change)
    
        num1.findOneAndUpdate(change,{num: ++c}).then(incremental =>{
            console.log("C updated", c)
        })
    })  

    /*num1.findOne({}).then(inc1 =>{
        console.log("Data in db ",inc1)
    })*/



    Reimbursment.find({})
    .then(data =>{
        var reimbursed
        //console.log(data)
        console.log(data.length)
        x = data.length
        v = data[x-1]
       // console.log(v)
        console.log("Data: ",data[x-1])
        if(v.from == "NIT" || v.from == "IIT")
        {
            reimbursed = 0.75 * v.totalfee;
        }
        else if(v.from == "GOVT")
        {
            reimbursed = 0.5 * v.totalfee;
        }
        else if(v.from == "PVT")
        {
            reimbursed = 0.25 * v.totalfee;
            if(reimbursed>2000)
                reimbursed = 2000;
        }
        const d = new Date()
        y = d.getFullYear()
        console.log(y)
        const str = "Received with thanks, the amount of Rs"+reimbursed+" towards attending "+v.type+" at "+v.from+" from MITS R&C cell."; 
        console.log(str)
        res.json({
            message: "SUCCESS",
            documentation: str,
            count: c,
            name: v.name,
            year: y
        })
        
    })
    //console.log("The response is:",res)
   

})


module.exports = router