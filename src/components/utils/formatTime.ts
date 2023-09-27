export const formatTime = (timeString: string) => {
  const dateObj = new Date(timeString);
  const daysOfWeek = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];

  const dayOfMonth = dateObj.getDate();
  const month = dateObj.toLocaleString('pt-BR', {month: 'long'});
  const year = dateObj.getFullYear();

  const dayOfWeek = daysOfWeek[dateObj.getDay()];
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;

  const day = `${dayOfMonth} de ${month} de ${year}`;
  const Time = `${dayOfWeek} às ${formattedHours}:${minutes
    .toString()
    .padStart(2, '0')} ${amPm}`;

  return {day, Time};
};
