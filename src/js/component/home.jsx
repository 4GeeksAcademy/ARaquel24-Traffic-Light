import React from "react";
import trafficLight from "../TrafficLight";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<trafficLight/>
			
		</div>
	);
};

export default Home;
