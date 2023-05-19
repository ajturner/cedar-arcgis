/**
 * simple time conversation functions
 */

/**
 * 
 * @param date 
 * @returns 
 */
export function parseISODate(date: string): Date {
  return new Date(date);
}

export function getDaysAgo(date: Date, daysAgo: number): Date {
  const pastDate = new Date(date.getTime());
  pastDate.setDate(pastDate.getDate() - daysAgo);
  return pastDate;
}