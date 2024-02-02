import "../css/style.css";
import { shell } from "./taco";
import { protein } from "./taco";
import { vegetables } from "./taco";
import { rice } from "./taco";
import { toppings } from "./taco";


DOMSelectors = {
    app: document.querySelector("#app"),
    header: document.querySelector(".header"),
    subheader: document.querySelector(".subheader"),
    site_search: document.querySelector(".site-search"),
    searchbtn: document.querySelector("#searchbtn"),
    pic: document.querySelector("#pic"),
    searchanswer: document.querySelector(".searchanswer"),
    store_select: document.querySelector(".store-select"),
    form: document.querySelector(".form"),
    chckbx: document.querySelector("#chckbx"),
    submitbutton: document.querySelector("#submitbutton"),
    form_answer: document.querySelector(".formanswer"),
    checkAll: document.querySelector(".checkAll"),
    clear: document.querySelector(".clear")
}

function inject(ingreds) {
    DOMSelectors.searchanswer.insertAdjacentHTML(
      "beforeend",
      `   <div class="cards">
  <h3 class="name">${ingreds.name}</h3>
  <h4 class="store">${ingreds.store}</h4>
  <h5 class="price">${ingreds.price}</h5>
  </div>
  `
    );
  }


function remove (){
  DOMSelectors.searchanswer.innerHTML = "";
}


DOMSelectors.searchbtn.addEventListener("click", function (event){
  event.preventDefault();
  remove();

  const searches = DOMSelectors.site_search.value.toLowerCase();
  const ingredsearch = ingreds.filter((ingre) => ingre.name.toLowerCase() == searches);

  if ()

})




let receipt=[];


function getData (){
    DOMSelectors.form.addEventListener("submit", function (event) {
        event.preventDefault();
        receipt=[];
        console.log()
    })
}


let checkAll = false;
DOMSelectors.checkAll.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("checked");
  if (checkAll === false) {
    DOMSelectors.types.forEach((checkbox) => {
      checkbox.checked = true;
    });
    checkAll = true;
    DOMSelectors.checkAll.innerHTML = "Uncheck All";
  } else if (checkAll === true) {
    DOMSelectors.types.forEach((checkbox) => {
      checkbox.checked = false;
    });
    checkAll = false;
    DOMSelectors.checkAll.innerHTML = "Check All";
  } else {
    console.log("Error checking all");
  }
});
