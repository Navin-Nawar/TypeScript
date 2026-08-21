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

const user1=new User("Navin",15)
user1.age=30

console.log(user1.age)