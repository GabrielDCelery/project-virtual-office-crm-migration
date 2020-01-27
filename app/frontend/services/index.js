import _ from 'lodash';
import apiService from './api';
import { EServiceName } from '../common/enums';
const { SERICE_NAME_API } = EServiceName;

class ServicesFactory {
  constructor() {
    this.services = {
      [SERICE_NAME_API]: apiService
    };
  }

  get() {
    return {
      execute: _.get(this.services, [...arguments])
    };
  }
}

export default new ServicesFactory();
