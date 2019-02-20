export const filter = fn => xs => xs.filter(fn)
export const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)

export const toRegExp = str =>
  new RegExp(str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "gi")

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
}

export const zipWith = fn => ([x, ...xs]) => ([y, ...ys], acc = []) =>
  x === undefined ? acc : zipWith(fn)(xs)(ys, [...acc, fn(x)(y)])

zipWith(a => b => a + b)([0, 1, 2])([1, 2, 3]) //?

export const concatLR = str1 => str2 => [Left.of(str1), Right.of(str2)]

const foldMap = fn => x => x.foldMap(fn)
