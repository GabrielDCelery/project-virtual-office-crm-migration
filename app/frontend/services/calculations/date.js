import moment from 'moment';

class DateCalculations {
  addMonthsToDate(dateObj, numOfMonths) {
    return new Date(
      moment(new Date(dateObj))
        .add('month', numOfMonths)
        .toDate()
    );
  }
}

module.exports = new DateCalculations();
