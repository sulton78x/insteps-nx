import { Check } from "react-feather";

const PricingCard = ({
	name = "",
	price = 0,
	currency = "$",
	frequency = "Per month",
	features = [],
	featured = false,
}) => {
	return (
		<div
			className={`${
				featured ? "bg-darkGreen text-white" : "bg-white text-darkGreen"
			} shadow-md rounded-lg w-72 md:w-80 flex flex-col justify-center items-center py-10 px-5 relative my-10 overflow-hidden`}
		>
			<div className='absolute bg-white  rotate-45 transform top-0 translate-x-2/4 translate-y-2/4 right-120'>
				{featured ? (
					<span className='px-20 text-xs text-darkGray font-semibold'>
						Best Offer
					</span>
				) : null}
			</div>
			<h3 className='text-darkGray font-bold text-32l'>{name}</h3>
			<div className='flex items-center font-bold'>
				<span>{currency}</span>
				<h4 className='text-6xl px-2 my-5'>{price}</h4>
				<span>.00</span>
			</div>
			<p className='font-bold mb-5'>{frequency}</p>
			{features.map((feature, index) => (
				<li key={index} className='flex items-center gap-2'>
					<Check /> <span>{feature}</span>
				</li>
			))}
			<button
				className={`${
					featured
						? "bg-white text-darkGreen"
						: "bg-darkGreen text-white"
				} rounded-lg py-2 px-5 shadow-md mt-5 font-semibold`}
			>
				Choose Plan
			</button>
		</div>
	);
};

export default PricingCard;
