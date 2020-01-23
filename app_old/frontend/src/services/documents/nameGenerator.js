import _ from 'lodash';
import moment from 'moment';
import removeAccents from 'remove-accents';

class NameGenerator {
  _normalizeInteger(_value) {
    return _value;
  }

  _normalizeDate(_value) {
    return moment(_value).format('YYYY-MM-DD');
  }

  _normalizeString(_value) {
    return removeAccents(_value.toLowerCase().replace(/ /g, '-'));
  }

  create(components = []) {
    const normalizedNameComponents = [];

    components.forEach(component => {
      const { type, value } = component;
      if (_.isNil(value) || value === '') {
        return null;
      }
      const _methodToCall = `_normalize${_.startCase(type)}`;

      return normalizedNameComponents.push(this[_methodToCall](value));
    });

    return normalizedNameComponents.join('_');
  }
}

export default new NameGenerator();
