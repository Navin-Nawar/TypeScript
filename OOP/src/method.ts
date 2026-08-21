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
    getinfo():string{
        const info=`Name : ${this.name}\nRoll : ${this.roll}`
        return info
    }
}

const rafi=new Student("Rafi","rafivau@gmail",16,123)
const sami=new Student("Samia","safivau@gmail",11,23)
console.log(rafi.getinfo())
console.log(sami.getinfo())