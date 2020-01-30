class Filterer {
  static createInstance() {
    return new Filterer();
  }

  static _objectHasFilterTerm({ object, filterBys, filterTerm }) {
    for (let i = 0, iMax = filterBys.length; i < iMax; i++) {
      const key = filterBys[i];
      const value = object[key];

      if (value.toLowerCase().includes(filterTerm)) {
        return true;
      }
    }

    return false;
  }

  filterObjects({ filterTerm, filterBys, limit, objects }) {
    const final = [];
    const fT = filterTerm.toLowerCase();

    for (let i = 0, iMax = objects.length; i < iMax; i++) {
      const object = objects[i];

      if (
        Filterer._objectHasFilterTerm({
          object,
          filterBys,
          filterTerm: fT
        })
      ) {
        final.push(object);
      }

      if (final.length === limit) {
        return final;
      }
    }

    return final;
  }
}

module.exports = Filterer;
