const sortBy = (field, reverse = false) => {
  const key = function (x) {
    return x[field];
  };

  const isReverse = !reverse ? 1 : -1;

  return function (a, b) {
    // eslint-disable-next-line no-sequences
    return (a = key(a)), (b = key(b)), isReverse * ((a > b) - (b > a));
  };
};

export default sortBy;
