class Animal{
    private _name:string

    constructor(name:string){
        this._name=name
    }

    makesound():void{
        console.log("Animal can make sound")
    }
}

class cat extends Animal{
    makesound(): void {
        console.log("mewww")
    }
}

const cat1=new cat("Billu")

cat1.makesound()