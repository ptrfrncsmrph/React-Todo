const { checkForall, string } = require("jsverify")
const test = require("tape")
const highlightMatches = require("./sandbox")

const toRegExp = str =>
  new RegExp(str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "gi")

test("", t => {
  t.plan(1)
  t.equal(
    checkForall(
      string,
      string,
      (s, t) => highlightMatches(s)(toRegExp(t)) === s
    ),
    true
  )
})
