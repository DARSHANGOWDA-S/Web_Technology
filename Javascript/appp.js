

// Constructor Function

function Employee(id ,name,salary) {
    this.name = name;
    this.id = id;
    this.salary = salary;
}
let emp1 = new Employee(101, "John", 50000);
console.log(emp1);
let emp2 = new Employee(102, "Jane", 60000);
console.log(emp2);

//Using Class


class Student{
    constructor(name,id,city){
        this.name=name;
        this.id=id;
        this.city=city;
    }
    printDetails(){
        console.log(this.name);
        console.log(this.id);
        
    }
    printDetails(){
        console.log(this.city);
    }
};
