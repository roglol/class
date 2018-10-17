let ss = require('simple-statistics')
module.exports = class Circle {
     constructor(id,name,age){
         this.id = id,
         this.name=name,
         this.age=age
         this.grades= []
     }
     addGrade(x){
        this.grades.push(x)
     }
     computeGradesAverage(){
         return  ss.mean(this.grades)
     }
}