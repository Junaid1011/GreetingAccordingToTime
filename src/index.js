//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

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
