const inputBox = document.querySelector(".To-Do-List");
const listContainer = document.querySelector(".todos");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  if (inputBox.value == "") {
    alert("You must enter a task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "X";
    li.appendChild(span);
  }
  inputBox.value = "";
  savedata();
});

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    savedata();
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    savedata();
  }
  false;

  function savedata() {
    localStorage.setItem("data", listContainer.innerHTML);
  }

  function getdata() {
    listContainer.innerHTML = localStorage.getItem("data");
  }
});

getdata();
