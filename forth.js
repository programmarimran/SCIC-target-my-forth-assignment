function  isBestFriend( f1 , f2 ) {
    if(typeof f1!=="object" || Array.isArray(f1) && typeof f2!=="object" || Array.isArray(f2)){
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

// const fiend1 ={ name: "hashem", roll: 1 , bestFriend: 1}
// const friend2 ={ name: "kashem" , roll: 1, bestFriend: 1 }

const argument = isBestFriend({ name: "hashem", roll: 1 , bestFriend: 1},
    { name: "kashem" , roll: 1, bestFriend: 1 })
console.log(argument)