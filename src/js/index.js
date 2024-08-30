//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

import TrafficLight from "./TrafficLight.jsx";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


//render your react application
const rootElement = document.querySelector('#app');


const root = ReactDOM.createRoot(rootElement);
root.render(<TrafficLight />);

