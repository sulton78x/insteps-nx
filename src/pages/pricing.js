import Footer from "../components/Footer";
import PricingCard from "../utilities/PricingCard";

const plans = [
	{
		name: "Silver",
		price: "25",
		frequency: "Per Month",
		currency: "$",
		features: [
			"Lorem ipsum dolor sit amet.",
			"Lorem ipsum dolor sit amet.",
			"Lorem ipsum dolor sit amet.",
			"Lorem ipsum dolor sit amet.",
		],
	},
	{
		name: "Gold",
		price: "50",
		frequency: "Per Month",
		featured: true,
		currency: "$",
		features: [
			"Lorem ipsum dolor sit amet.",
			"Lorem ipsum dolor sit amet.",
			"Lorem ipsum dolor sit amet.",
			"Lorem ipsum dolor sit amet.",
		],
	},
	{
		name: "Platinum",
		price: "95",
		frequency: "Per Month",
		currency: "$",
		features: [
			"Lorem ipsum dolor sit amet.",
			"Lorem ipsum dolor sit amet.",
			"Lorem ipsum dolor sit amet.",
			"Lorem ipsum dolor sit amet.",
		],
	},
];

const Pricing = () => {
	return (
		<div>
			<div className='my-10 mx-5 text-center'>
				<div>
					<h2 className='text-darkGray font-bold text-3xl my-5'>
						Pricing <span className='text-darkGreen'>Plans</span>
					</h2>
					<h4 className='font-semibold'>
						Go Premium to have access to unlimited questions to help
						you badge your 6-Figures Job Interview.
					</h4>
				</div>
				<div className='flex justify-center w-full flex-col items-center sm:grid sm:grid-cols-3 md:grid-cols-3'>
					{/* I don't have to pass individual props. */}
					{plans.map((plan, index) => (
						<PricingCard key={index} {...plan} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Pricing;
