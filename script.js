function recursive(n) {
  if (n >= 0) {
    console.log(n);
    return recursive( n - 1);
  }
};
recursive(10);