interface Employee {
    name:string;id:number,department:string,salary?:number
}

const mark:Employee ={
    name:"ana",
    id:101,
    department:"ICE",
    salary:75000
}

//Use interface when you're mainly defining the structure of an object/class, 
// Use type when you need unions, tuples, primitive aliases, function types, or more complex type

interface user{
    name :string
}

interface Admin extends user{
    roll:number
}

const admin:Admin={
    name:"Navin",
    roll:20
}
