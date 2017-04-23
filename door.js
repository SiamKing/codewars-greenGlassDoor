function stepThroughWith(s) {
  return s.split('').reduce((acc, val, i, arr) => val === arr[i + 1] ? acc = true : acc, false)
}
