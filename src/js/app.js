export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Недопустимое значение'],
      [2, 'Параметр не найден'],
    ]);
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}
