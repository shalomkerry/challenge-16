let shareview = document.getElementById("sharing");
let shareicon = document.querySelector(".share-icon");
let sharebackground = document.querySelector(".share");
let windowsInnerWidth = window.innerWidth;
console.log(windowsInnerWidth);
function change() {
  shareview.classList.toggle("visible");

  if (shareview.classList.contains("visible")) {
    shareicon.classList.add("paths");
    sharebackground.style.backgroundColor = "#6d7f97";
    if (windowsInnerWidth <= 501) {
      sharebackground.style.alignSelf = "center";
    }
  } else {
    shareicon.classList.remove("paths");
    sharebackground.style.backgroundColor = "#F2F9FF";
  }
}
