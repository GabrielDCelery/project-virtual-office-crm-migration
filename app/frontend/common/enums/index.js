import EServiceNameStrings from './EServiceName';
import EServiceMethodStrings from './EServiceMethod';

const createEnums = enums => {
  const enumsObj = {};

  enums.forEach((e, index) => {
    if (enumsObj[e]) {
      throw new Error(`Enum already declared ${e}`);
    }

    enumsObj[e] = index;
  });

  return enumsObj;
};

export const EServiceName = createEnums(EServiceNameStrings);
export const EServiceMethod = createEnums(EServiceMethodStrings);
