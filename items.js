export default new Array(20).fill().map((e,i) => {
  return {
    name: "foo" + (i + 1),
    value: "bar" + (i + 1)
  }
});