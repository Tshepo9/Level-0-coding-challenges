function convertToTime(value) {
  let hours = Math.round(value / 60);
  let minutes = value % 60;
  let hourStr = "hour";
  let minStr = "minute";

  //check for singular and pluras on hours
  if (hours > 1) {
    hourStr += "s";
  }
  if (minutes > 1) {
    minStr += "s";
  }

  console.log(hours + ":" + hourStr + " " + minutes + ":" + minStr);
}

convertToTime(71);
