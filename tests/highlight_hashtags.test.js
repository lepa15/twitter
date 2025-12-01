import { expect } from 'chai';
import highlightHashtags from '../public/assets/highlightHashtags.js';

describe('Функция по подстветке хештегов', () => {
  it('должна подсветить один хэштег', () => {
    const input = 'Кто еще изучает #javascript ?';
    const output = 'Кто еще изучает <a href="/search?tag=javascript">#javascript</a> ?';
    expect(highlightHashtags(input)).to.equal(output);
  });

  it('должна подсветить несколько хэштегов', () => {
    const input = 'Изучаю #js и #frontend каждый день';
    const output = 'Изучаю <a href="/search?tag=js">#js</a> и <a href="/search?tag=frontend">#frontend</a> каждый день';
    expect(highlightHashtags(input)).to.equal(output);
  });

  it('должна работать с хэштегами в начале строки', () => {
    const input = '#hello мир!';
    const output = '<a href="/search?tag=hello">#hello</a> мир!';
    expect(highlightHashtags(input)).to.equal(output);
  });

  it('должна игнорировать одиночный символ # без слова', () => {
    const input = 'Просто # тест';
    const output = 'Просто # тест';
    expect(highlightHashtags(input)).to.equal(output);
  });

  it('должна корректно обрабатывать текст без хэштегов', () => {
    const input = 'Хэштегов тут нет совсем';
    const output = 'Хэштегов тут нет совсем';
    expect(highlightHashtags(input)).to.equal(output);
  });

  it('должна корректно обрабатывать спецсимволы после тега', () => {
    const input = 'Я люблю #javascript!';
    const output = 'Я люблю <a href="/search?tag=javascript">#javascript</a>!';
    expect(highlightHashtags(input)).to.equal(output);
  });

  it('должна правильно работать с кириллицей', () => {
    const input = 'Сегодня учу #программирование';
    const output = 'Сегодня учу <a href="/search?tag=программирование">#программирование</a>';
    expect(highlightHashtags(input)).to.equal(output);
  });
});
