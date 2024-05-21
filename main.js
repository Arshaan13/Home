import { addElement } from "./addtask.js";
import { closer } from "./close.js";
import { edit } from "./edit.js";
import { stroke } from "./completed.js";

document.getElementById("Add-btn").addEventListener("click", addElement);

function coloring() {
  var items = document.getElementsByTagName("li");
  var i;
  for (i = 0; i < items.length; i++) {
    if (i % 2 == 0) {
      items[i].style.backgroundColor = "#ffb3c0";
    } else {
      items[i].style.backgroundColor = "#ff8096";
    }
  }
}

setInterval(coloring, 100);
stroke()
closer();
edit();