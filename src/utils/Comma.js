export const Comma = (value) =>
  String(value)
    .replace(/,/gi, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
