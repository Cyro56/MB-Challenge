export const levenshteinDistance = (
  queryString: string,
  userParams: string,
) => {
  const matrix = Array.from({length: queryString.length + 1}, () =>
    Array.from({length: userParams.length + 1}, () => 0),
  );

  for (let i = 0; i <= queryString.length; i++) {
    matrix[i][0] = i;
  }

  for (let j = 0; j <= userParams.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= queryString.length; i++) {
    for (let j = 1; j <= userParams.length; j++) {
      const cost = queryString[i - 1] === userParams[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost,
      );
    }
  }

  return matrix[queryString.length][userParams.length];
};
