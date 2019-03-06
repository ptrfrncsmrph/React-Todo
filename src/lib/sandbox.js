const add = require("lodash/fp/add")
const zip = require("lodash/fp/zip")

// highlightMatches :: String -> RegExp -> [JSX]
const highlightMatches = str => query => {
  const misses = str.split(query)
  const matches = str.match(query)
  return zip(misses, matches)
    .flat()
    .reduce(add)
}

module.exports = highlightMatches
