export default function convertToFixed(value: any, precision: number): string {
  const stringValue = parseFloat(value).toLocaleString([], {
    style: "decimal",
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  });

  return stringValue;
}
