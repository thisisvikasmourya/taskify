export function timeFormat(dateString: string): string {
    const now = new Date();
    const past = new Date(dateString);
    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);
  
    const units: { name: string; seconds: number }[] = [
      { name: 'year', seconds: 31536000 },
      { name: 'month', seconds: 2592000 },
      { name: 'week', seconds: 604800 },
      { name: 'day', seconds: 86400 },
      { name: 'hour', seconds: 3600 },
      { name: 'min', seconds: 60 },
      { name: 'sec', seconds: 1 },
    ];
  
    for (const unit of units) {
      const quotient = Math.floor(diffInSeconds / unit.seconds);
      if (quotient >= 1) {
        return `${quotient} ${unit.name}${quotient > 1 ? 's' : ''} ago`;
      }
    }
  
    return 'just now';
  }