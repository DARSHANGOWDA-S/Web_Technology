
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
};
 console.log(student.name);
 console.log(student.id);
 console.log(student.city);

 student.id=102;
 student.city="Los Angeles";

 delete student.id;
    console.log(student);