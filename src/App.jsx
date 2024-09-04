import React from "react";
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Recommendations from "./components/Recommendations";

const App = () => {
  return (
		<Router>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<HeroSection />
						</>
					}
				/>
				<Route
					path="/Recommendations"
					element={
						<>
							<Recommendations />
						</>
					}
				/>
			</Routes>
		</Router>
	);
}


export default App;
