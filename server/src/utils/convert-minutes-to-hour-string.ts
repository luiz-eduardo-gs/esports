export function convertMinutesToHourString(minutes: number): string {
  const hoursStr = Math.floor(minutes / 60);
  const minutesStr = minutes % 60;
  return `${String(hoursStr).padStart(2, '0')}:${String(minutesStr).padStart(2, '0')}`;
}