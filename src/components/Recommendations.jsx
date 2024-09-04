import React,{useState, useEffect} from 'react'

const Recommendations = () => {

  return (
		<div className="mt-8">
			<h2 className="text-center">
				MEAL RECOMMENDATIONS BASED ON YOUR PREFERENCES
			</h2>
			<div className="cards  flex flex-col gap-4">
				<div className="card-body w-[80%] m-auto bg-white shadow-lg shadow-blue-200 p-4 rounded-lg">
					<div className="card-title-tag flex justify-between">
						<h2 className="card-title font-bold">
							Tuna and Plantain Stew with Palm Wine
						</h2>
						<p className="text-gray-300 text-[12px]">
							#TunaStew #WestAfricanCuisine
						</p>
					</div>
					<p className="card-text">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
						illum vero consequatur. Doloribus sed ratione fugiat aut nesciunt,
						quod, neque, veritatis autem pariatur facilis at rerum quidem
						voluptatum nostrum temporibus.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Recommendations
