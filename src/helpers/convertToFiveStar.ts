export default function convertToFiveStar(value: number) {
  return Math.ceil(value / 2) || 1;
}
