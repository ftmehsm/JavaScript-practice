import { suggestions } from "./suggestions.js";

const $ = document;
const input = $.querySelector("#search-input");
const menu = $.querySelector("#menu");


input.addEventListener("keyup", function () {
  let searchValue = input.value.trim();
  menu.innerHTML = "";
  if (searchValue) {
    menu.classList.add("active");
    let res = suggestions.filter((item) =>
      item.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (res.length > 0) {
      res.map((item) => {
        const listItem = $.createElement("li");
        listItem.textContent = item;
        listItem.classList.add("listItem");
        menu.appendChild(listItem);
        addClick(listItem)
      });
    }else{
        const listItem = $.createElement("li");
        listItem.textContent= searchValue;
        listItem.classList.add("listItem");
        menu.appendChild(listItem);
        addClick(listItem)
    }
  } else {
    menu.classList.remove("active");
  }
});

function addClick(item){
    item.addEventListener("click" , function(){
        menu.innerHTML = '';
        input.value = item.textContent;
        menu.classList.remove("active");
    })
}