function convertToTime(value){

     let hours = Math.round(value/60);
     let minutes = value%60;

     let hourstr = "hour";
     let minstr = "minute";
  
    //check for singular and pluras on hours
      if (hours>1){
          hourstr +="s"
      }
      if (minutes>1){
          minstr +="s"
      }

      console.log(hours+":"+hourstr+" "+minutes+":"+minstr);
}

convertToTime(71);