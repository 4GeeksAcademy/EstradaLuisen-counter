import React, {useState, useEffect} from "react";
const Home = () => {
	const [seconds , setSeconds]= useState(0);
	const [cont1 , setCont1]= useState(0);
	const [cont2 , setCont2]= useState(0);
	const [cont3 , setCont3]= useState(0);
	const [cont4 , setCont4]= useState(0);
	const [cont5 , setCont5]= useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
		  setSeconds(seconds => seconds + 1);
		}, 1000);
		
		  return () => clearInterval(interval);
		}, []);
	return (
		<div className="d-flex justify-content-center mt-5">
			<div className="d-flex justify-content-center col-8">
				<div className="display-5 me-5">
					<i className="far fa-clock"></i>
				</div>
				<div className=" rounded border border-dark display-5 me-2">
					{cont5}
				</div>
				<div className="rounded border border-dark display-5 me-2">
					{cont4< 10 ? cont4 : (setCont4(0) , setCont5(cont5+1))}
				</div>
				<div className="rounded border border-dark display-5 me-2">
					{cont3< 10 ? cont3 : (setCont3(0) , setCont4(cont4+1))}					
				</div>
				<div className="rounded border border-dark display-5 me-2">
					{cont2< 10 ? cont2 : (setCont2(0) , setCont3(cont3+1))}
				</div>
				<div className="rounded border border-dark display-5 me-2">
					{cont1< 10 ? cont1 : (setCont1(0) , setCont2(cont2+1))}	
				</div>
				<div className="rounded border border-dark display-5">
					{seconds< 10 ? seconds : (setSeconds(0) , setCont1(cont1+1))}
				</div>
			</div>
		</div>
	);
};

export default Home;
