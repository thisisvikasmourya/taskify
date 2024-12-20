export function formatDateMonth(date: string | number | Date): string {
    let parsedDate = new Date(date);
  
    // Convert to IST (UTC+5:30)
    const offset = 5.5 * 60 * 60 * 1000; // 5 hours 30 minutes in milliseconds
    parsedDate = new Date(parsedDate.getTime() + offset);
  
    // Get day, month, year
    const day = parsedDate.getUTCDate();
    const month = parsedDate.toLocaleString('default', { month: 'short' });
    const year = parsedDate.getUTCFullYear();
  
    // Formatted string
    const formattedString = `${day} ${month}, ${year}`;
  
    return formattedString;
  }