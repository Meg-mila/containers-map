import ErrorRepository from '../app';

const error = new ErrorRepository();

test('error 1', () => {
  expect(error.translate(1)).toBe('Недопустимое значение');
});

test('error 2', () => {
  expect(error.translate(2)).toBe('Параметр не найден');
});

test('Unknown error', () => {
  expect(error.translate(3)).toBe('Unknown error');
});
