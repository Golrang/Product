export const numberFormat4Digit = function (number: number, width: number) {
  return new Array(+width + 1 - (number + "").length).join("0") + number;
};
