import _ from "lodash";
import "./style.css";
import Laptop from "./assets/images/laptop.jpeg";
function component() {
  const element = document.createElement("div");
  const img = document.createElement("img");
  img.src = Laptop;
  element.innerHTML = _.join(["Hello", "webpack"], "-");
  element.classList.add("hello");
  element.appendChild(img);
  return element;
}

document.body.appendChild(component());
