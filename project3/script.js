function dashboardClick() {
  const elem = document.getElementsByClassName("dashboard")[0];
  elem.style.display = "block";
  elem.style.margin = 0;
  elem.style.right = 0;
}

function removeDashBoard() {
  const elem = document.getElementsByClassName("dashboard")[0];
  elem.style.display = "none";
  elem.style.margin = "-250px";
  elem.style.right = "-250px";
}
