class DataNormalizer {
  constructor() {
    this.removeExtraWhiteSpaces = this.removeExtraWhiteSpaces.bind(this);
    this.startCaseWords = this.startCaseWords.bind(this);
  }

  removeExtraWhiteSpaces(string = '') {
    return string.replace(/\s+/g, ' ').trim();
  }

  startCaseWords(string = '') {
    const words = string.split(' ');

    return words
      .map(word => {
        return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
      })
      .join(' ');
  }
}

module.exports = DataNormalizer;
