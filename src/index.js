
import React from "react";
import reactdom from "react-dom";

const style = {
  color: ""
};

var today = new Date();
var curHr = today.getHours();

let greeting;
if (curHr < 12) {
  greeting = "good moring";
  style.color = "red";
} else if (curHr < 18) {
  greeting = "good afternoon";
  style.color = "blue";
} else {
  greeting = "good evening";
  style.color = "green";
}

reactdom.render(
  <div>
    <h1 className="heading" style={style}>
      {" "}
      {greeting}{" "}
    </h1>
  </div>,
  document.getElementById("root")
);
