import { expect } from 'chai';
import convertTime from '../src/convert_time.js';

describe('Функция для преобразования числа во время', () => {
  it("должно вернуть 'только что' если прошло < 1 минуты", () => {
    const post = new Date('2025-01-01T12:00:00Z');
    const current = new Date('2025-01-01T12:00:20Z');
    expect(convertTime(post, current)).to.equal('только что');
  });

  it('должно корректно возвращать минуты', () => {
    const post = new Date('2025-01-01T12:00:00Z');
    const current = new Date('2025-01-01T12:05:00Z');
    expect(convertTime(post, current)).to.equal('5 минут назад');
  });

  it('1 минута назад', () => {
    const post = new Date('2025-01-01T12:00:00Z');
    const current = new Date('2025-01-01T12:01:00Z');
    expect(convertTime(post, current)).to.equal('1 минуту назад');
  });

  it('59 минут назад', () => {
    const post = new Date('2025-01-01T12:01:00Z');
    const current = new Date('2025-01-01T13:00:00Z');
    expect(convertTime(post, current)).to.equal('59 минут назад');
  });

  it('должно корректно возвращать 1 час назад', () => {
    const post = new Date('2025-01-01T10:00:00Z');
    const current = new Date('2025-01-01T11:00:00Z');
    expect(convertTime(post, current)).to.equal('1 час назад');
  });

  it('должно корректно возвращать часы', () => {
    const post = new Date('2025-01-01T10:00:00Z');
    const current = new Date('2025-01-01T15:00:00Z');
    expect(convertTime(post, current)).to.equal('5 часов назад');
  });

  it('1 день назад', () => {
    const post = new Date('2025-01-01T00:00:00Z');
    const current = new Date('2025-01-02T00:00:00Z');
    expect(convertTime(post, current)).to.equal('1 день назад');
  });

  it('несколько дней назад', () => {
    const post = new Date('2025-01-01T00:00:00Z');
    const current = new Date('2025-01-20T00:00:00Z');
    expect(convertTime(post, current)).to.equal('19 дней назад');
  });

  it('1 месяц назад', () => {
    const post = new Date('2025-01-01T00:00:00Z');
    const current = new Date('2025-02-01T00:00:00Z');
    expect(convertTime(post, current)).to.equal('1 месяц назад');
  });

  it('несколько месяцев назад', () => {
    const post = new Date('2025-01-01T00:00:00Z');
    const current = new Date('2025-06-01T00:00:00Z');
    expect(convertTime(post, current)).to.equal('5 месяцев назад');
  });

  it('1 год назад', () => {
    const post = new Date('2024-02-01T00:00:00Z');
    const current = new Date('2025-02-01T00:00:00Z');
    expect(convertTime(post, current)).to.equal('1 год назад');
  });

  it('несколько лет назад + проверка склонений', () => {
    const post = new Date('2020-01-01T00:00:00Z');
    const current = new Date('2025-01-01T00:00:00Z');
    expect(convertTime(post, current)).to.equal('5 лет назад');
  });
});
