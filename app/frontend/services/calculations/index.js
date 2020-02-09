import { EServiceMethod } from '../../common/enums';
const { SERVICE_METHOD_ADD_MONTHS_TO_DATE } = EServiceMethod;
import addMonthsToDate from './addMonthsToDate';

export default {
  [SERVICE_METHOD_ADD_MONTHS_TO_DATE]: addMonthsToDate
};
