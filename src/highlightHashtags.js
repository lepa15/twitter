export default function highlightHashtags(text) {
  const arr = text.split(' ');

  function makeLink(anchor) {
    const symbols = ['?', ':', ';', ',', '.', '!'];
    let position = -1;

    for (let i = 0; i < anchor.length; i += 1) {
      if (symbols.includes(anchor[i])) {
        position = i;
        break;
      }
    }

    if (position !== -1) {
      const newAnchor = anchor.slice(0, position);
      const restPartOfWord = anchor.slice(position);

      return `<a href="/search?tag=${newAnchor.slice(1)}">${newAnchor}</a>${restPartOfWord}`;
    }

    return `<a href="/search?tag=${anchor.slice(1)}">${anchor}</a>`;
  }

  for (let i = 0; i < arr.length; i += 1) {
    const word = arr[i];

    if (word[0] === '#' && word.length > 1) {
      arr[i] = makeLink(word);
    }
  }

  return arr.join(' ');
}
