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

export function generateRandomID(): string {
  let d = new Date().getTime();
  let d2 = Math.round(Math.random() * d);
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}
