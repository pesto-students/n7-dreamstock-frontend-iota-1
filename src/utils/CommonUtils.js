export const RemoveElementFromArray = (array, index) => {
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};
