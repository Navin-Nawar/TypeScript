const getTicketprice=(age:number):number=>{

    if(age<5)return 0;
    else if(age>=5&&age<=12)return 100;
    if(age<12&&age<60)return 200;
    return 120
}

console.log(getTicketprice(3))
console.log(getTicketprice(12))
console.log(getTicketprice(45))