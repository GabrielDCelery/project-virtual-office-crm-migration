import moment from 'moment';

class DateTransformations {
  convertDateObjToFieldCompatible(dateObj) {
    return moment(dateObj).format('YYYY-MM-DD');
  }

  convertFieldValueToDateObj(fieldValue) {
    return new Date(fieldValue);
  }
}

module.exports = new DateTransformations();
