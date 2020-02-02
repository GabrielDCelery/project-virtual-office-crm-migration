export const UstartCaseEveryWord = (string = '') => {
  const words = string.split(' ');

  return words
    .map(word => {
      return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    })
    .join(' ');
};
