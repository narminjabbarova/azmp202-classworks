import { products } from "./data.js";
const tBody = document.querySelector("tbody")
const searchInput = document.querySelector("#search")
const btnAsc = document.querySelector(".asc")
const btnDesc = document.querySelector(".desc")
const btnDefault = document.querySelector(".default")
const btnSort = document.querySelector(".sort")
const selectCat = document.querySelector("#category")
const prodForm = document.querySelector(".product-form")

function createTable(array) {
    tBody.innerHTML = "";
    array.forEach((product) => {
      const trElem = document.createElement("tr");
      trElem.innerHTML = `
              <td><img src="${product.image}" width="100"/></td>
              <td>${product.id}</td>
              <td>${product.title}</td>
              <td>${product.price}</td>
              <td>${product.category}</td>
              <td>${product.rating.rate}</td>
              <td><i class="fa-solid fa-trash-can text-danger delete-btn" data-id=${product.id}></i></td>
          `;
  
      tBody.appendChild(trElem);
    });
  
   }
   createTable(products)