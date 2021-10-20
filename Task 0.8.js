function convertToTime(value){

     let hours = Math.round(value/60);
     let minutes = value%60;
  
    //check for singular and pluras on hours
    if(hours>1){
        console.log(hours+" hours ")
    }
    else{
        console.log(hours+" hour ")
    }

    //check for singular and pluras on minutes
    if(minutes>1){
        console.log(minutes+" minutes ")
    }
    else{
        console.log(minutes+" minute ")
    }
 
}

convertToTime(133);