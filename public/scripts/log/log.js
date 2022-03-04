// Private
const list = []
// Public
module.exports = {
  add: function (student) {
    list.push(student)
  },
  edit: function (student, index) {
    list[index] = student
  },
  get: function (index) {
    return list[index]
  },
  delete: function (index) {
    list.splice(index, 1) // remove one element starting from index
  },
  array: function () {
    return list
  },
  size: function () {
    return list.length
  },
  empty: function () {
    list.splice(0, list.length) // clear list
  },
  end: function () {
    return list[list.length - 1]
  },
  back: function () {
    return list.length - 1// index of the last element
  }
}
