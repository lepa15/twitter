import { expect } from 'chai';
import replaceLinks from '../public/assets/replaceLinks.js';

describe('replaceLinks', () => {
  it('1) Преобразует ссылку в середине текста', () => {
    const input = 'мой гитхаб: https://github.com/lepa15/twitter';
    const output = replaceLinks(input);
    expect(output).to.equal(
      'мой гитхаб: <a href="https://github.com/lepa15/twitter">https://github.com/lepa15/twitter</a>',
    );
  });

  it('2) Не меняет текст без ссылок', () => {
    const input = 'просто текст без ссылок';
    expect(replaceLinks(input)).to.equal(input);
  });

  it('3) Добавляет https:// если нет протокола', () => {
    const input = 'google.com';
    const output = replaceLinks(input);
    expect(output).to.equal(
      '<a href="https://google.com/">google.com</a>',
    );
  });

  it('4) Игнорирует строки без точки', () => {
    const input = 'сайт local';
    const output = replaceLinks(input);
    expect(output).to.equal(input);
  });

  it('5) Не обрабатывает недопустимые домены', () => {
    const input = 'мой сайт ....com';
    const output = replaceLinks(input);
    expect(output).to.equal(input);
  });

  it('6) Выносит спецсимвол в конце ссылки за пределы <a>', () => {
    const input = 'ссылка: github.com;';
    const output = replaceLinks(input);
    expect(output).to.equal(
      'ссылка: <a href="https://github.com/">github.com</a>;',
    );
  });

  it('7) Поддерживает заглавные буквы в домене', () => {
    const input = 'Example.COM';
    const output = replaceLinks(input);
    expect(output).to.equal(
      '<a href="https://example.com/">Example.COM</a>',
    );
  });

  it('8) Преобразует несколько ссылок в одном тексте', () => {
    const input = 'мой гитхаб: https://github.com/lepa15/twitter, ресурсы: google.com github.com';
    const output = replaceLinks(input);
    expect(output).to.equal(
      'мой гитхаб: <a href="https://github.com/lepa15/twitter">https://github.com/lepa15/twitter</a>, ресурсы: <a href="https://google.com/">google.com</a> <a href="https://github.com/">github.com</a>',
    );
  });
});
