export const timeStampToDate = (time: number) => {
  const data = new Date(time);

  const dataFormatada = data.toLocaleDateString();

  return dataFormatada;
};
