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

let checkAtdarate =email.includes("@");
if(checkAtdarate==false){
    return false;
}

else if(email.endsWith(".com")===false){
     return false;
 }

 else{return true;}
}












let email =validEmail("he ro@alom.com" )
console.log(email)