import { arry } from "./api.js";
document.addEventListener("DOMContentLoaded", (a) => {
  let country = document.getElementById("country");
  let statesoption = document.getElementById("state");
  let cityoption = document.getElementById("city");
  // papulate
  const Dropdown = (dropdown, value) => {
    value.forEach((item) => {
      const option = new Option(item);
      dropdown.add(option); //add into dropdown
    });
  };
  // country
  Dropdown(country, Object.keys(arry[0]));
  // country to state
  country.addEventListener("change", () => {
    const selectCountry = document.getElementById("country").value;
    const state = Object.keys(arry[0][selectCountry]);
    Dropdown(statesoption, state);
    Object.keys;
  });
  //state to city
  statesoption.addEventListener("change", () => {
    const selectcountry = country.value;
    const selectstate = statesoption.value;
    const city = arry[0][selectcountry][selectstate];
    Dropdown(cityoption, city);
  });
});
