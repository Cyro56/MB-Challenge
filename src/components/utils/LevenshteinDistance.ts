export const levenshteinDistance = (
  queryString: string,
  formatedCardString: string,
) => {
  const matrix = Array.from({length: queryString.length + 1}, () =>
    Array.from({length: formatedCardString.length + 1}, () => 0),
  );

  for (let i = 0; i <= queryString.length; i++) {
    matrix[i][0] = i;
  }

  for (let j = 0; j <= formatedCardString.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= queryString.length; i++) {
    for (let j = 1; j <= formatedCardString.length; j++) {
      const cost = queryString[i - 1] === formatedCardString[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost,
      );
    }
  }

  return matrix[queryString.length][formatedCardString.length];
};
