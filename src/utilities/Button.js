const Button = ({ text }) => {
	return (
		<button className='text-white font-semibold bg-darkGreen shadow-md dark:bg-white dark:text-darkGreen px-4 outline-none py-2 inline-block text-center rounded-lg my-3'>
			{text}
		</button>
	);
};

export default Button;
