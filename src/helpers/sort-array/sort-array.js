export const sortArray = {
  byDate: (arr) => [...arr.sort((a, b) => new Date(b.date) - new Date(a.date))],
  byOdd: (arr) => [...arr.filter((_, id) => ++id % 2 > 0)],
  byEven: (arr) => [...arr.filter((_, id) => ++id % 2 === 0)]
};
