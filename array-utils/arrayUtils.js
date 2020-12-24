  
const map = function (callback, val) {
  const result = []
  callback = callback.bind(val)
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this))
  }
  return result
}


const filter = function (callback, val) {
  const result = []
  callback = callback.bind(val)
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this))
      result.push(this[i])
  }
  return result
}


const reduce = function (callback, initialValue = 0) {
  let result = initialValue
  for (let i = 0; i < this.length; i++) {
    result = callback(result, this[i], i, this)
  }
  return result
}

const forEach = function (callback, val) {
  callback = callback.bind(val)
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}
export {
  forEach,
  map,
  filter,
  reduce,
}