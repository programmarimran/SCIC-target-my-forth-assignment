

//************************************************************* */

//Function no =1;
function cashOut(money) {
    if(typeof money=="number" && money>=0){
        const moneyCharge =money*1.75/100;
    return moneyCharge;
    }
    else{
        return "Invalid"
    }
    
}

let argument = cashOut(2000)
console.log(argument)

//*********************************************************************** */
//Function no=2;
function  validEmail( email ) {
    if(typeof email!=="string"){
        return "Invalid"
    }
    let notIcon =".-_+@";
    for(const singleIcon of notIcon){
        if(email.startsWith(singleIcon)){
            return false;
        }
    }
    if(email.endsWith(".com")===false){
        return false;
    }
    const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const result =checkEmail.test(email)
    return result;
}

let argument2 =validEmail("king@yahoo.com")
console.log(argument2)