

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

//*************************************************************************** */
//Function no=3;
function  electionResult( votes ) {
    if(Array.isArray(votes)==false){
        return "Invalid";
    }
         let partyMango = [];
         let partyBanana =[];
       for(const party of votes){
        if(party=='mango'){
            partyMango.push(party)
            
        }
        else if(party=='banana'){
            partyBanana.push(party)
        }
       }
       if(partyMango.length>partyBanana.length){
        return "Mango";
       }
       else if(partyMango.length==partyBanana.length){
        return "Draw";
       }
       else{
        return "Banana";
       }
      
       
        
}

//******************************************************************************* */
//Function no=4;
function  isBestFriend( f1 , f2 ) {
    if(typeof f1!=="object" || Array.isArray(f1) ){
        return  "Invalid";
    }
    else if( typeof f2!=="object" || Array.isArray(f2)){
        return  "Invalid";
    }

   if(f1.bestFriend==f2.roll && f1.roll==f2.bestFriend){
    return true;
   }
   else{
    return false;
   }
}

//*********************************************************************** */

//Function no=5
function  calculateWatchTime( times ) {
    
    if(Array.isArray(times)==false){
        return "Invalid";
    }
    for(const index of times){
        if(typeof index!=="number"){
            return "Invalid";
        }
    }

    let sum =0;
    for(const value of times){
        sum +=value;
    }
    const hours = Math. floor(sum / 3600);
    const minutes = Math. round((sum - (hours * 3600)) / 60);
    const seconds = sum - (hours * 3600) - (minutes * 60); 
    
   const object ={
    hour:hours,
    minute:minutes,
    second:seconds
   }

   return object;
  
}

















let argument = cashOut(-350)
console.log(argument)


let argument2 =validEmail("programming-hero.com")
console.log(argument2)


let arry =["mango", "BananA", "na vote", "na vote"]
console.log( electionResult(arry))


const argument5 = isBestFriend(
    { name: "hashem", roll: 1 , bestFriend: 1},
    { name: "kashem" , roll: 1, bestFriend: 1 }
)
console.log(argument5)


const arry9 =[100, 3800, "90" ]
console.log(calculateWatchTime(arry9))