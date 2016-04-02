export default (num) => {
  let fibFirst = 0;
  let fibSecond = 1;
  let fibSum = 0;
  let i = 0;

  while (i < num) {
    fibFirst = fibSecond;
    fibSecond = fibSum;
    fibSum = fibFirst + fibSecond;
    i++;
  }
  return fibSum;
};
