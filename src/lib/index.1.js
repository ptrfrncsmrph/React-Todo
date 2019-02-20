const inspect = Symbol.for("nodejs.util.inspect.custom")

class Right {
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

class Left {
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

const either = f => g => ({ constructor, value }) => {
  switch (constructor) {
    case Left:
      return f(value)
    case Right:
      return g(value)
  }
}

module.exports = { Left, Right, either }
