interface Response<T>{
    data:T,
    status:number
}

const transactionResponse:Response<string>={
    data:"Transaction Successful",
    status:20
}

const transactionStatus:Response<boolean>={
    data:false,
    status:30
}


function getLength<item>(array:item[]):number{
    return array.length
}

getLength<string>(['','0'])
getLength<number>([4,5,7])