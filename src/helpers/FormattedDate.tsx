function formatDate(date:any) {
  date = new Date(date);

  // Convert to IST (UTC+5:30)
  var offset = 5.5 * 60 * 60 * 1000; // 5 hours 30 minutes in milliseconds
  date = new Date(date.getTime() + offset);

  // Get day, month, year
  var day = date.getUTCDate();
  var month = date.getUTCMonth() + 1; // Month is zero-based
  var year = date.getUTCFullYear();

  // Get hours, minutes
  var hours = date.getUTCHours();
  var minutes = date.getUTCMinutes();

  // Convert hours to 12-hour format and determine AM/PM
  var amPM = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, set it to 12

  // Add leading zeros if necessary
  day = ("0" + day).slice(-2);
  month = ("0" + month).slice(-2);
  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);

  // Formatted string
  var formattedString =
    day + "-" + month + "-" + year + " " + hours + ":" + minutes + " " + amPM;

  return formattedString;
}
export default formatDate;
