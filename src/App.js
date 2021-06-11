import react from "react";
import reactdom from "react-dom";

const name = "kalyan";
const name1 = "kotikalapudi";

reactdom.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {new Date().getFullYear()}</p>

    <h1 className="heading" contentEditable="true">
      Hi {name + " " + name1} this is your list {Math.round(Math.random() * 10)}
    </h1>

    <h2 className="heading" contentEditable="true">
      This is me
    </h2>

    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>orange</li>
    </ul>

    <div>
      <img
        className="food-img"
        alt="image1"
        src="https://homepages.cae.wisc.edu/~ece533/images/mountain.png"
      />

      <img
        className="food-img"
        alt="image2"
        src="https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
      />
    </div>
  </div>,

  document.getElementById("root")
);

//All the CSS tags used in JSX are camel cased
