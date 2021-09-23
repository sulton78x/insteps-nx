const Banner = () => {
	return (
		<div className='bg-bannerImg bg-auto object-cover my-5'>
			<div className='backdrop-filter backdrop-opacity-50 backdrop-brightness-100 bg-gradient-to-r from-green-700 to-green-200'>
				<div className='p-5'>
					<div className='text-white mr-10'>
						<h5 className='font-semibold text-2xl'>
							It's time to invest in yourself and <br /> build
							your dream career.
						</h5>
						<p>
							Learning to code might be the best turning point of
							your career race, <br /> don't waste any more time.
						</p>
						<button className='text-darkGreen py-2 px-5 bg-white rounded-lg mt-5 font-semibold'>
							Get Started
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
