import _ from "lodash";
import "./style.css";

import printMe from './print.js';

// import xml data - loader is already added in webpack
import xmlData from "./data/note.xml";
import jsonData from "./data/jsonData.json"; //json is added by default. no external loader needed

function component() {
  console.log('xmlData',xmlData.note);
  console.log('jsonData',jsonData);
const btn = document.createElement('button');
btn.innerHTML = 'Click me and check the console!';
 btn.onclick = printMe;
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], "-");
  element.classList.add("hello");
 element.appendChild(btn);
 
  return element;
}

document.body.appendChild(component());
