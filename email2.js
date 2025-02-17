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

let argument =validEmail("king@yahoo.com")
console.log(argument)



// let str ='--disohhe'
// console.log(str.startsWith('-') str.endsWith)