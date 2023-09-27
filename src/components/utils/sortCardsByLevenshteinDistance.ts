import {levenshteinDistance} from './LevenshteinDistance';
import {formatCardString} from './formatCardString';
import {ICardItem} from './types';

export const sortCardsByLevenshteinDistance = (
  queryString: string,
  cards: ICardItem[],
) => {
  const sortedCards = cards.map(item => {
    const formattedString = formatCardString(item.local, item.name);
    const distance = levenshteinDistance(
      queryString.toLowerCase(),
      formattedString.toLowerCase(),
    );
    return {
      ...item,
      levenshteinDistance: distance,
    };
  });

  sortedCards.sort((a, b) => a.levenshteinDistance - b.levenshteinDistance);

  return sortedCards;
};
