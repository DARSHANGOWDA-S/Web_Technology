
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
    },
    printDetails:function(){
        console.log(this.name);
        console.log(this.id);
        
    }
};
let keys=Object.keys(student);
console.log(keys);
let values=Object.values(student);
console.log(Object.values(student));
console.log(Object.entries(student));
console.log(Object.entries(marks));
