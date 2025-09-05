
//Using Object Literal

let student={
    name:"John",
    id:101,
    city:"New York",
    printDetails:function(){
        console.log(this.name);
        console.log(this.id);
        console.log(this.city);
    },
    marks: {
        kannada: 95,
        english: 88
    }
}

student.printDetails();
console.log(student.marks.kannada);
student.marks.science=90;
console.log(student.marks);