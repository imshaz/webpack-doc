import _ from "lodash";
import "./style.css";
import Laptop from "./assets/images/laptop.jpeg";

// import xml data - loader is already added in webpack

import xmlData from "./data/note.xml";
import jsonData from "./data/jsonData.json";

function component() {
  console.log('xmlData',xmlData.note);
  console.log('jsonData',jsonData);

  const element = document.createElement("div");
  const img = document.createElement("img");
  img.src = Laptop;
  element.innerHTML = _.join(["Hello", "webpack"], "-");
  element.classList.add("hello");
  element.appendChild(img);
  return element;
}

document.body.appendChild(component());
