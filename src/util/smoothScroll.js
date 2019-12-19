export default id => {
  const node = document.getElementById(id)
  window.scroll({
    top: node.offsetTop,
    left: node.offsetLeft,
    behavior: "smooth",
  })
}
