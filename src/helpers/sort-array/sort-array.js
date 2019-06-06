export const sortArray = {
  byDate: (arr) => [...arr.sort((a, b) => new Date(b.date) - new Date(a.date))],
  byOddIndex: (arr) => [...arr.filter((_, id) => ++id % 2 > 0)],
  byEvenIndex: (arr) => [...arr.filter((_, id) => ++id % 2 === 0)]
};
