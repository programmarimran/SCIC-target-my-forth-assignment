function  validEmail( email ) {
    if(typeof email!=="string"){
        return "Invalid"
    }

    const finalInput =email.trim();
    console.log(finalInput);


    let notIcon =".-_+@";
    for(const singleIcon of notIcon){
        if(finalInput.startsWith(singleIcon)){
            return false;
        }
    }

    let checkAtdarate =finalInput.includes("@");
    if(checkAtdarate==false){
        return false;
    }

    else if(finalInput.includes(" ")){
        return false;
    }

    else if(finalInput.endsWith(".com")===false){
         return false;
     }

     else{return true;}

}









let finalInput =validEmail(        "  programmarimran@gmail.com   "     )
console.log(finalInput)