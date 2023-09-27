export const toTimeStamp = (dateString: string) => {
  const [day, month, year, time] = dateString.split(/[\s-:]+/);

  const fullYear = `20${year}`;

  const date = new Date(`${fullYear}-${month}-${day}T${time}:00`);

  const timestamp = date.getTime();
  return timestamp;
};
