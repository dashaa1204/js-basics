function add() {
  const addBox = document.getElementById("box").innerHTML;
  console.log(addBox);

  document.getElementById("box").innerHTML =
    document.getElementById("box").innerHTML +
    document.getElementById("box").innerHTML;
}
