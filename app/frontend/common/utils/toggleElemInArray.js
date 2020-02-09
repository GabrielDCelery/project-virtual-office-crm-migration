export const UtoggleElemInArray = (array, value) => {
  const clonedArray = JSON.parse(JSON.stringify(array));
  const index = clonedArray.indexOf(value);

  index === -1 ? clonedArray.push(value) : clonedArray.splice(index, 1);

  return clonedArray;
};
