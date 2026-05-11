export function seededFloat(seed: number) {
  return (Math.sin(seed) + 1) / 2;
}

export function seededRange(seed: number, min: number, max: number) {
  return min + seededFloat(seed) * (max - min);
}
