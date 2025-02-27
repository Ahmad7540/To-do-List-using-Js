let task = document.querySelector(".task");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

function work(e) {
  if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  } else if (e.target.getAttribute("class") == "checked") {
    e.target.setAttribute("class", "uncheck");
  } else {
    e.target.setAttribute("class", "checked");
  }
  saveData();
}

function addItem(e) {
  if (task.value == "") {
    alert("Add some task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = task.value;
    list.appendChild(li);
    li.setAttribute("class", "uncheck");
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    task.value = "";
    saveData();
    list.addEventListener("click", work);
  }
}
list.addEventListener("click", work);
btn.addEventListener("click", addItem);

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function getData() {
  list.innerHTML = localStorage.getItem("data");
}
getData()
