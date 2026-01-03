export default function replaceLinks(text) {
  const allowed = 'abcdefghijklmnopqrstuvwxyz0123456789.-';
  const specSymbols = '?!,.:;';

  function checkDomain(node) {
    if (!node.includes('.')) return false;
    if (node.startsWith('.') || node.endsWith('.')) return false;

    const labels = node.split('.');
    if (labels.some((label) => label.length === 0)) return false;

    return true;
  }

  function isValidURL(input) {
    let trimmed = input.trim();
    let lastSymbol = '';

    if (specSymbols.includes(input.slice(-1))) {
      trimmed = input.slice(0, -1);
      lastSymbol = input.slice(-1);
    }

    try {
      const normalized = trimmed.startsWith('http')
        ? trimmed
        : `https://${trimmed}`;

      const url = new URL(normalized);

      const isHostValid = url.hostname.toLocaleLowerCase()
        .split('')
        .every((char) => allowed.includes(char));

      if (!isHostValid) return false;

      if (!checkDomain(url.hostname)) return false;

      return [url.href, lastSymbol];
    } catch {
      return false;
    }
  }

  return text.split(' ')
    .map((string) => {
      const result = isValidURL(string);

      if (result) {
        return `<a href="${result[0]}">${string.slice(0, string.length - result[1].length)}</a>${result[1]}`;
      }
      return string;
    })
    .join(' ');
}
