class User{
    private _name:string
    private _age:number

    constructor(name:string,age:number){
        this._name=name
        this._age=age
    }

    set age(value:number){
        if(value<0||value>100){
            throw new Error("Age is not valid")
        }
        this._age=value
    }

    get age(){
        return this._age
    }

    
}


class Student extends User{

    private _fee:number

    constructor(name:string,age:number,fee:number){
        super(name,age)
        this._fee=fee
    }

}


const stu1=new Student("nava",156,1256)
console.log(stu1)