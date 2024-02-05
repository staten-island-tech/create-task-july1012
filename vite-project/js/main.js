import "../css/style.css";
import { shell, protein, vegetables, rice, toppings, ingredients } from "./taco";


const DOMSelectors = {
    app: document.querySelector("#app"),
    header: document.querySelector(".header"),
    subheader: document.querySelector(".subheader"),
    site_search: document.querySelector(".site-search"),
    searchbtn: document.querySelector(".searchbtn"),
    pic: document.querySelector("#pic"),
    searchanswer: document.querySelector(".searchanswer"),
    storeSelect: document.querySelector("#store-select"),
    form: document.querySelector("#form"),
    chckbx: document.querySelector(".chckbx"),
    submitbutton: document.querySelector(".submitbutton"),
    formanswer: document.querySelector("#formanswer"),
    checkAll: document.querySelector("#checkAll"),
    clear: document.querySelector(".clearbtn"),
    types: document.querySelectorAll('input[name="type"]'),
    receiptHeader: document.querySelector("#receiptHeader"),
    storeName: document.querySelector("#storeName"),
    receipt: document.querySelector('#receipt'),
    totalPrice: document.querySelector('#totalPrice'),
    rating: document.querySelector('#rating'),
    
}

function inject(ingreds) {
    DOMSelectors.formanswer.insertAdjacentHTML(
      "beforeend",
      `<div class="cardss">
  <h4 class="name">${ingreds.name}</h4>
  <h5 class="price">$${ingreds.price}</h5>
  </div>
  `
    );
    DOMSelectors.clear.style.visibility = "visible"
  }

function remove() {
  DOMSelectors.clear.style.visibility = "hidden"
  DOMSelectors.formanswer.innerHTML = "";
  DOMSelectors.receiptHeader.innerHTML = ""
  DOMSelectors.receipt.style.visibility = "hidden" 
  DOMSelectors.rating.innerHTML = ""
}

DOMSelectors.clear.addEventListener("click", function clear(event){
  event.preventDefault();
  remove()
})



//on form submit
function findIngreds() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    remove();
    let receipt = []
    let searchThru = []
    let inStore = []
    let checked  = document.querySelectorAll('input[name="type"]:checked');
    let totalCost =  0;

    //push values of all checked boxes 
    checked.forEach((box)=> {
      searchThru.push(box.value)
    })
   
    // filter all ingredients for items in selected store
    ingredients.forEach((category)=> {
     category.forEach((food)=>{
      if (food.store == DOMSelectors.storeSelect.value) {
        inStore.push(food)
      } 
     })
    })

    // find matching between checked ingredients and store ingredients; add costs together
    searchThru.forEach((ingred)=>{
     inStore.forEach((food) => {
      if (food.name == ingred) {
        receipt.push(food)
        return totalCost = totalCost+food.price
      }
     });   
    })
    
  

    //add HTML 
    DOMSelectors.receiptHeader.innerHTML =
      "Here is your personalized taco receipt!";
      DOMSelectors.receipt.style.visibility = "visible"
    DOMSelectors.storeName.innerHTML = DOMSelectors.storeSelect.value;
    DOMSelectors.totalPrice.innerHTML = "$"+totalCost
    receipt.forEach((item) => {
     
      inject(item);
    });
    // summary of item count
    for (let i = 0; i < receipt.length; i++){
      DOMSelectors.rating.insertAdjacentHTML(  "beforeend",
      `<h4 class="dollarRating">$</h4>  `)
    }
  });
}

DOMSelectors.submitbutton.addEventListener("click", findIngreds())

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
