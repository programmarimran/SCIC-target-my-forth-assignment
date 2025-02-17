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

const argument5 = isBestFriend(
    { name: "hashem", roll: 1 , bestFriend: 1},
   [ { name: "kashem" , roll: 1, bestFriend: 1 }]
)
// console.log(argument5)

//**************************************************************** */
















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

const arry =[100, 3800, 90]
	// { hour: 1, minute: 2, second:5 }
console.log(calculateWatchTime(arry))








