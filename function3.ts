function calculateTax(amount:string|number,tax:number):number{

        if(typeof amount=='string'){
            amount=parseFloat(amount);
        }

        return amount*tax;
}


const mytax=calculateTax(155,3.05);
console.log(mytax)