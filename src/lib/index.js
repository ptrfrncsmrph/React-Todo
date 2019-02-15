export const filter = fn => xs => xs.filter(fn)
export const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)

export const toRegExp = str => new RegExp(str, "gi")

export class Right {
  constructor(x) {
    this.value = x
  }
  static of(x) {
    return new Right(x)
  }
  map(fn) {
    return new Right(fn(this.value))
  }
  foldMap(fn) {
    return fn(this.value)
  }
}

export class Left {
  constructor(x) {
    this.value = x
  }
  static of(x) {
    return new Left(x)
  }
  map(_) {
    return new Left(this.value)
  }
  foldMap(_) {
    return this.value
  }
}

// This is a brittle zipWith for this specific use case
export const zipWith = fn => ([x, ...xs]) => ([y, ...ys], acc = []) =>
  x === undefined ? acc : zipWith(fn)(xs)(ys, [...acc, ...fn(x)(y)])

export const concatLR = str1 => str2 => [Left.of(str1), Right.of(str2)]
