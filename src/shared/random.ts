export function randomFromArray<T>(arr: Array<T>): T {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

export function shuffleArray<T>(arr: Array<T>): Array<T> {
  const res = [...arr];
  const len = res.length;
  for (let idx = len - 1; idx > 0; idx--) {
    const randIdx = Math.floor(Math.random() * (idx - 1));
    [res[randIdx], res[idx]] = [res[idx], res[randIdx]];
  }
  return res;
}
