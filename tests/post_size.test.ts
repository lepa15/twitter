import { assert } from 'chai';
import postSize from '@/utility/post_size';

describe('Функция проверки расчета размера поста', () => {
  it('1. Без ссылок', () => {
    assert.equal(12, postSize('Всем привет!'));
  });

  it('2. Одна http-ссылка заменяется на 1 символ', () => {
    const text = 'Привет http://example.com друг';
    assert.equal(13, postSize(text));
  });

  it('3. Одна https-ссылка тоже считается как 1 символ', () => {
    const text = 'Смотри: https://google.com!';
    assert.equal(10, postSize(text));
  });

  it('4. Ссылка в начале строки', () => {
    const text = 'https://site.com Привет!';
    assert.equal(9, postSize(text));
  });

  it('5. Ссылка в конце строки', () => {
    const text = 'Текст перед ссылкой http://a.com';
    assert.equal(21, postSize(text));
  });

  it('6. Несколько ссылок → каждая считается как 1 символ', () => {
    const text = 'Смотри http://a.com и https://b.com сейчас';
    assert.equal(19, postSize(text));
  });

  it('7. Пост состоит только из одной ссылки', () => {
    const text = 'http://test.com';
    assert.equal(1, postSize(text));
  });

  it('8. Пост состоит из двух ссылок подряд', () => {
    const text = 'http://a.com https://b.com';
    assert.equal(3, postSize(text));
  });

  it('9. Ссылка без http (например t.me)', () => {
    const text = 'Переходи: t.me/somechannel';
    assert.equal(11, postSize(text));
  });

  it('10. Сложный текст со спецсимволами и ссылкой в середине', () => {
    const text = 'Привет 😊 https://vk.com/test это тест!';
    assert.equal(20, postSize(text));
  });
});
