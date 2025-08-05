export const items = new Array(100000).fill(null).map((_, i) => {
  return {
    id: i,
    text: `item-${i}`,
    isEven: i % 2 === 0,
  };
});
