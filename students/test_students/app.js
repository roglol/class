// const Circle = require('../student')

// let circle = new Circle(1,'Giga', 19)
// circle.addGrade(10)
// circle.addGrade(9)
// circle.addGrade(8)
// console.log(circle.grades)
// console.log(circle.computeGradesAverage())
const express = require('express')
const app = express()
app.get('/customers/:customerId(\\d+)', (req,res) =>{
    res.send('customerId: ' + req.params.customerId)
})

app.listen(3000)