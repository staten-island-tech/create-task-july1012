import "../css/style.css";

const url = "http://taco-randomizer.herokuapp.com/";
async function data(url) {
  try {
    const response = await fetch(url);
    const dataa = await response.json();
    insert(dataa);
    console.log("Data:", dataa[0]);
    getData(dataa);
  } catch (error) {
    console.log(error);
  }
}
data(url);