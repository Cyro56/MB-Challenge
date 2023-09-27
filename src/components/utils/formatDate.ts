function padZero(numero: number) {
  return numero < 10 ? '0' + numero : numero;
}

export const FormatDate = (timeStamp: number) => {
  var data = new Date(timeStamp);

  // Agora você pode acessar os componentes da data, como ano, mês, dia, hora, etc.
  var ano = data.getFullYear();
  var mes = data.getMonth() + 1; // Lembre-se de que os meses em JavaScript começam em 0 (janeiro = 0, fevereiro = 1, etc.)
  var dia = data.getDate();
  var hora = data.getHours();
  var minuto = data.getMinutes();
  var segundo = data.getSeconds();

  // Para formatar a data como uma string, você pode criar uma string personalizada
  var dataFormatada =
    ano +
    '-' +
    padZero(mes) +
    '-' +
    padZero(dia) +
    ' ' +
    padZero(hora) +
    ':' +
    padZero(minuto) +
    ':' +
    padZero(segundo);

  return dataFormatada;
};
