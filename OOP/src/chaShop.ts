class ChaShop{
    title:string
    solditems:any=[]

    constructor(title:string){
        this.title=title
    }

    solded(name:string,price:number){
        this.solditems.push({name,price})
    }

    totalearn(){
        const total=this.solditems.reduce((acc,item)=>acc+item.price,0)
        return total
    }
}

const customer1=new ChaShop("Rafi")
customer1.solded("Tea",10)
customer1.solded("cake",20)

console.log(customer1)
console.log(customer1.totalearn())