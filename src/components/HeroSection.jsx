import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../images/background.jpg";
import LoadingSpinner from "./LoadingSpinner";
import "../styles/App.css";


const HeroSection = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 

	const handleSearch = () => {
		setLoading(true);

        setTimeout(() => {
            setLoading(false);
            navigate("/Recommendations");
		}, 3000);
	};

	return (
		<div>
			<div
				className="relative h-screen bg-cover bg-center"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			>
				{/* Overlay */}
				<div className="absolute inset-0 bg-blue-400 bg-opacity-60"></div>

				{/* Content */}
				<div className="min-h-screen flex flex-col">
					<div className="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
						<div className="overflow-hidden z-0 rounded-[0.8rem] relative p-3">
							<form
								role="form"
								className="relative flex z-50 bg-white rounded-[0.8rem]"
								onSubmit={(e) => {
									e.preventDefault();
									handleSearch();
								}}
							>
								<input
									type="text"
									placeholder="Available Ingredients"
									className="rounded-[0.8rem] flex-1 px-6 py-4 text-gray-700 focus:outline-none"
								/>
								<button
									type="submit"
									className="bg-indigo-500 text-white rounded-[0.8rem] font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
								>
									Generate
								</button>
							</form>
							<div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
							<div className="glow glow-2 z-20 bg-purple-400 absolute"></div>
							<div className="glow glow-3 z-30 bg-yellow-400 absolute"></div>
							<div className="glow glow-4 z-40 bg-blue-400 absolute"></div>
						</div>
					</div>
				</div>
			</div>

			{loading && <LoadingSpinner />}
		</div>
	);
};

export default HeroSection;
