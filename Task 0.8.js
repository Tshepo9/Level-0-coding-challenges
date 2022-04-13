function convertToTime(value) {
  const hours = Math.round(value / 60);
  const minutes = value % 60;
  let hourStr = "hour";
  let minStr = "minute";

  if (hours > 1 || hours === 0) {
    hourStr += "s";
  }
  if (minutes === 0 || minutes > 1) {
    minStr += "s";
  }

  console.log(`${hours} ${hourStr}, ${minutes} ${minStr}`);
}

convertToTime(71);
