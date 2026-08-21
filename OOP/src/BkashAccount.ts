class BkashAccount{
    phone:string
    private balance:number
    private pin:number
    protected history:any=[]

    constructor(phone:string,balance:number,pin:number){
        this.phone=phone
        this.balance=balance
        this.pin=pin
    }

    getbalance(pin:number){
        if(this.pin===pin){
            return this.balance
        }
        return `Wrong pin`
    }
}

const user1=new BkashAccount("01966267867",5620,1589)

console.log(user1.getbalance(1589))