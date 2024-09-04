import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

function CookingProcedure() {
    const location = useLocation();
    const recipe = location.state?.recipe;

	return (
        <div className="mt-8">
            <h1>{recipe.dishName}</h1>
            <p>{recipe.shortDescription}</p>
			<h2 className="text-center text-[1.2rem] font-bold">
				Required Ingredients
            </h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>))}
            </ul>
            <h2>Steps</h2>
            <ol>
                {recipe.steps.map((step, index) => (<li key={index}>{step}</li>))}
            </ol>

			<div className="card-body w-[80%] m-auto bg-white shadow-lg shadow-blue-200 p-4 rounded-lg">
                <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient}
                    </li>
                ))}
                </ul>
			</div>

			<div className="my-8">
				<h2 className="text-center text-[1.2rem] font-bold">Cooking Steps</h2>
				<div className="card-body w-[80%] m-auto bg-white shadow-lg shadow-blue-200 p-4 rounded-lg">
                    <ol>
                        {recipe.steps.map((step, index) => (
                            <li key={index}>
                                {step}
                            </li>
                        ))}
                    </ol>
				</div>
			</div>
		</div>
	);
};

export default CookingProcedure;
