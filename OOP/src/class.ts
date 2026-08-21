class Student{
    name:string
    email:string
    roll:number
    marks:number

    constructor(name:string,email:string,roll:number,marks:number){
        this.name=name
        this.email=email
        this.roll=roll
        this.marks=marks
    }
}

const rafi=new Student("Rafi","rafivau@gmail",16,123)
const sami=new Student("Samia","safivau@gmail",11,23)
console.log(rafi)
console.log(sami)