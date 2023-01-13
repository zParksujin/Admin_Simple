export const Comma = (value: number | string): string =>
  String(value)
    .replace(/,/gi, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
