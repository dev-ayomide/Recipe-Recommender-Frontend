import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../images/background.jpg";
import LoadingSpinner from "./LoadingSpinner";
import "../styles/App.css";

function HeroSection() {
	const [loading, setLoading] = useState(false);
	const [ingredients, setIngredients] = useState("");
	const [allergies, setAllergies] = useState("");
	const navigate = useNavigate();

	const handleGenerate = async () => {
		if (!ingredients) {
			alert("Please enter an ingredient.");
			return;
		}

		const response = await fetch("/api/recommend-dishes", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ ingredients, allergies }),
		});

		const data = await response.json();
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
			navigate("/recipes", { state: { recipes: data.response } });
		}, 3000);
	};

	return (
		<div
			className="relative h-screen bg-cover bg-center"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-blue-400 bg-opacity-60"></div>

			{/* Content */}
			<div className="min-h-screen flex flex-col">
				<div className="relative p-6 w-full max-w-lg mx-auto">
					{/* Ingredients and Generate Button */}
					<div className="flex flex-col sm:flex-row gap-4 mb-4">
						<input
							type="text"
							value={ingredients}
							onChange={(e) => setIngredients(e.target.value)}
							placeholder="Enter ingredients"
							className="rounded-lg px-4 py-2 w-full sm:flex-1 text-gray-700 focus:outline-none"
						/>
						<button
							type="submit"
							className="bg-blue-500 text-white rounded-lg px-6 py-2 w-full sm:w-auto hover:bg-blue-400 focus:bg-blue-600 focus:outline-none"
							onClick={handleGenerate}
						>
							Generate Recipes
						</button>
					</div>

					{/* Allergies Input (below the ingredients) */}
					<input
						type="text"
						value={allergies}
						onChange={(e) => setAllergies(e.target.value)}
						placeholder="Enter allergies"
						className="rounded-lg px-4 py-2 w-full text-gray-700 focus:outline-none"
					/>			
				</div>
			</div>

			{loading && <LoadingSpinner />}
		</div>
	);
}

export default HeroSection;
